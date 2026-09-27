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

const PAGE_URL = 'https://www.couponscrew.com/blog/amazon-great-indian-festival-2026-upcoming-sales';
const PAGE_TITLE = 'Amazon Great Indian Festival 2026: Sale Date, Prime Early Access, SBI Offer and Live Deals';

const RELATED_POSTS = [
  {
    slug: 'big-billion-days-vs-amazon-great-indian-festival',
    title: 'Big Billion Days vs Amazon Great Indian Festival 2026: Dates, Bank Offers and Which Sale Is Better',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790298079/big-billion-days-vs-amazon-great-indian-festival_dmjxxj.webp',
    date: 'Sep 25, 2026',
    readTime: '8 min read',
    excerpt: 'Big Billion Days 2026 starts Oct 9, Amazon Great Indian Festival on Oct 8. Compare dates, bank offers, early access and phone deals to pick the right sale.',
  },
  {
    slug: 'big-billion-days-2026-flipkart-upcoming-sales',
    title: 'Big Billion Days 2026: Sale Date, Early Access, Bank Offers and Flipkart\'s Upcoming Sales',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790489840/big-billion-days-2026-flipkart-upcoming-sales_vdosgd.webp',
    date: 'Sep 27, 2026',
    readTime: '9 min read',
    excerpt: 'Flipkart Big Billion Days 2026 starts 9 October with early access on 8 October. Axis Bank and ICICI Bank are the bank partners this year. See the full sale calendar, deal timings and tips to save more.',
  },
  {
    slug: 'raksha-bandhan-gift-ideas',
    title: '10 Best Raksha Bandhan Gift Ideas 2026 — Discount Codes to Save More',
    category: 'Festive Guides',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787588384/raksha-bandhan-gift-ideas_z16zzz.webp',
    date: 'Aug 24, 2026',
    readTime: '8 min read',
    excerpt: 'Discover thoughtful and trending Raksha Bandhan gift ideas for brothers and sisters, and learn how to stack coupons, bank offers, and cashback to save extra on every gift.',
  },
];

const FAQS = [
  {
    q: 'When does Amazon Great Indian Festival 2026 start?',
    a: 'Amazon Great Indian Festival 2026 starts on 8 October 2026, as announced by Amazon.in on 18 September 2026. Early Deals have been live since 25 September.',
  },
  {
    q: 'When is Prime early access for Amazon GIF 2026?',
    a: 'Prime early access is widely expected on 7 October 2026, but Amazon has not confirmed it yet. In 2023, when the sale also started on 8 October, Prime members got access from midnight on 7 October.',
  },
  {
    q: 'When will Amazon Great Indian Festival 2026 end?',
    a: 'Amazon has not announced the end date. The 2025 sale ended on Diwali day (20 October) and the 2024 sale ended on 29 October, just before Diwali. With Diwali on 8 November 2026, the sale may run into early November.',
  },
  {
    q: 'Which bank offer is available in Amazon GIF 2026?',
    a: 'SBI credit cards, debit cards and EMI get a 10% instant discount, and Prime members get up to 10% extra. The Amazon Pay ICICI credit card gives unlimited 5% cashback to Prime members and 3% to others. The SBI cap and minimum order value have not been published yet.',
  },
  {
    q: 'Do Prime Lite and Shopping Edition members get early access?',
    a: 'In 2025, Prime, Prime Lite and Prime Shopping Edition members all got early access to the Great Indian Festival, and Shopping Edition still lists early sale access as a benefit. Amazon has not published 2026 early access rules yet.',
  },
  {
    q: 'Is Amazon GIF cheaper than Flipkart Big Billion Days?',
    a: 'It depends on the product and your card. Amazon\'s bank partner is SBI, while Flipkart\'s are Axis Bank and ICICI Bank. Compare the final price, including your card\'s discount, on both sites before buying.',
  },
  {
    q: 'What are 8 PM Deals and Grand Opening Deals?',
    a: 'They are time-slot deals on the first four Hero days of the sale. Grand Opening Deals run from midnight to 12 PM, Mega Deals from 12 PM to 8 PM, and 8 PM Deals from 8 PM to midnight.',
  },
  {
    q: 'Does the ₹5 marketplace fee apply during the sale?',
    a: 'Yes. Amazon charges a flat ₹5 marketplace fee per order for all customers, including Prime members, on eligible prepaid payments.',
  },
  {
    q: 'What is Amazon\'s next sale after the Great Indian Festival?',
    a: 'After GIF and its Diwali phase, Amazon usually runs a Black Friday sale in late November and the Great Republic Day Sale in mid-January. The 2025 Black Friday sale ran from 28 November to 1 December.',
  },
];

export default function AmazonGreatIndianFestival2026Blog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">Amazon Great Indian Festival 2026</span>
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
                  Amazon Great Indian Festival 2026: Sale Date, Prime Early Access, SBI Offer and Live Deals
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Sep 27, 2026</span>
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
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790492673/amazon-great-indian-festival-2026-upcoming-sales_zz7w76.webp"
                  alt="Amazon Great Indian Festival 2026: Sale Date, Prime Early Access, SBI Offer and Live Deals"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  Amazon Great Indian Festival 2026 starts on 8 October 2026, as confirmed by Amazon.in. SBI credit card, debit card and EMI users get a 10% instant discount, and Prime members get up to 10% extra. Early Deals are already live. Prime early access is widely expected on 7 October, but Amazon has not confirmed it yet, and the end date is still unannounced.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Below is everything Amazon has confirmed so far, what is still unconfirmed, the Early Deal prices Amazon has published, and the rest of Amazon&apos;s sale calendar through early 2027. For codes and bank offers you can use during the sale, keep our{' '}
                  <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon code page</Link> handy.
                </p>
              </div>

              {/* SECTION 1: When Does Amazon Great Indian Festival 2026 Start? */}
              <section id="when-does-it-start" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  When Does Amazon Great Indian Festival 2026 Start?
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The Amazon Great Indian Festival 2026 starts on 8 October 2026. Amazon.in announced the date on 18 September 2026. Here is the timeline as it stands today:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Phase</th>
                        <th className="p-4 sm:px-6">Date</th>
                        <th className="p-4 sm:px-6">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Early Deals</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Live since 25 September 2026</td>
                        <td className="p-4 sm:px-6 font-semibold text-green-700">Confirmed by Amazon</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Prime Early Access</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">7 October 2026 (reported)</td>
                        <td className="p-4 sm:px-6 font-semibold text-orange-600">Expected, not yet confirmed by Amazon</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Main sale for everyone</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">8 October 2026</td>
                        <td className="p-4 sm:px-6 font-semibold text-green-700">Confirmed by Amazon</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Diwali-phase offers</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Late October to early November (Dhanteras 6 Nov, Diwali 8 Nov)</td>
                        <td className="p-4 sm:px-6 text-gray-500">Expected</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Sale end date</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not announced</td>
                        <td className="p-4 sm:px-6 text-gray-500">Unknown</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  If you have seen &quot;9 October&quot; quoted for Amazon, that is Flipkart Big Billion Days&apos; public start date, not Amazon&apos;s. Amazon opens a day earlier.
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E] mt-6">
                  How GIF 2026 dates compare with previous years
                </h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  This year&apos;s sale starts late because Diwali falls later, on 8 November 2026.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-100 text-[#1A1A2E] font-bold border-b border-[#E8E8F0]">
                        <th className="p-3">Edition</th>
                        <th className="p-3">Prime Early Access</th>
                        <th className="p-3">Main sale start</th>
                        <th className="p-3">Sale end</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr>
                        <td className="p-3">2024</td>
                        <td className="p-3">26 September</td>
                        <td className="p-3">27 September 2024</td>
                        <td className="p-3">29 October 2024</td>
                      </tr>
                      <tr>
                        <td className="p-3">2025</td>
                        <td className="p-3">22 September</td>
                        <td className="p-3">23 September 2025</td>
                        <td className="p-3">20 October 2025 (Diwali day)</td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="p-3 font-semibold">2026</td>
                        <td className="p-3 font-semibold">7 October (expected)</td>
                        <td className="p-3 font-semibold">8 October 2026</td>
                        <td className="p-3 font-semibold">Not announced</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The 2026 start is 15 days later than 2025 and matches 2023, when the sale also opened on 8 October with Prime early access from midnight on 7 October. The last two editions ran for roughly a month and ended on or just before Diwali. If Amazon follows that pattern, GIF 2026 would run into early November. That is our reading of past years, not an Amazon announcement.
                </p>
              </section>

              {/* SECTION 2: Bank Offers */}
              <section id="bank-offers" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Amazon Great Indian Festival 2026 Bank Offers
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  SBI is Amazon&apos;s banking partner for GIF 2026. Here is what Amazon has confirmed in its 18 and 25 September announcements:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Offer</th>
                        <th className="p-4 sm:px-6">Details</th>
                        <th className="p-4 sm:px-6">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">SBI credit card, debit card and EMI</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">10% instant discount</td>
                        <td className="p-4 sm:px-6 font-semibold text-green-700">Confirmed</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Prime member extra</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Up to 10% extra, only for Prime members</td>
                        <td className="p-4 sm:px-6 font-semibold text-green-700">Confirmed</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Amazon Pay ICICI Bank credit card</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Unlimited 5% cashback for Prime members, 3% for non-Prime; welcome rewards up to ₹2,500; no joining or annual fee</td>
                        <td className="p-4 sm:px-6 font-semibold text-green-700">Confirmed</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Amazon Pay Later</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">10% cashback on a range of purchases; &quot;Pay in 3&quot; interest-free EMI on carts of ₹1,500 or more, no processing fee</td>
                        <td className="p-4 sm:px-6 font-semibold text-green-700">Confirmed</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Amazon Pay Balance</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Flat ₹20 cashback on orders of ₹300+ in fashion, beauty and home &amp; kitchen</td>
                        <td className="p-4 sm:px-6 font-semibold text-green-700">Confirmed</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Travel with Amazon Pay ICICI (Prime)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Up to 15% off plus 5% cashback on flights and hotels</td>
                        <td className="p-4 sm:px-6 font-semibold text-green-700">Confirmed</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">SBI offer cap and minimum order value</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not published by Amazon yet</td>
                        <td className="p-4 sm:px-6 font-semibold text-orange-600">Awaited</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  For reference, during Prime Day 2026 the SBI credit card offer was capped at ₹12,000 per card for the whole offer period, and the debit card offer at ₹7,000. GIF terms may differ, so check the offer details on the product page before paying.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Some sites have mentioned an HDFC Bank offer for GIF 2026. Amazon&apos;s own announcements name only SBI, and the HDFC 10% offer was the partner deal for August&apos;s Great Freedom Sale. Treat HDFC claims for GIF as unconfirmed.
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E] mt-6">
                  SBI discount or Amazon Pay ICICI cashback: which saves more?
                </h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The answer depends on your cart value, because instant discounts are usually capped and the Amazon Pay ICICI cashback is not.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Here is an example with a <strong>hypothetical ₹1,500 cap</strong> on the SBI offer (the real cap is not out yet):
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-100 text-[#1A1A2E] font-bold border-b border-[#E8E8F0]">
                        <th className="p-3">Cart value</th>
                        <th className="p-3">SBI 10% (capped at ₹1,500)</th>
                        <th className="p-3">Amazon Pay ICICI 5% (Prime, uncapped)</th>
                        <th className="p-3">Better option</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr>
                        <td className="p-3">₹10,000</td>
                        <td className="p-3">₹1,000 off</td>
                        <td className="p-3">₹500 cashback</td>
                        <td className="p-3 font-semibold text-green-700">SBI</td>
                      </tr>
                      <tr>
                        <td className="p-3">₹30,000</td>
                        <td className="p-3">₹1,500 off</td>
                        <td className="p-3">₹1,500 cashback</td>
                        <td className="p-3 font-semibold">Equal</td>
                      </tr>
                      <tr>
                        <td className="p-3">₹60,000</td>
                        <td className="p-3">₹1,500 off</td>
                        <td className="p-3">₹3,000 cashback</td>
                        <td className="p-3 font-semibold text-green-700">Amazon Pay ICICI</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Two differences to keep in mind. The SBI discount comes off the price at checkout, while the Amazon Pay ICICI cashback is credited later. And the break-even point moves with the real cap, so redo this sum once SBI publishes its terms.
                </p>
              </section>

              {/* SECTION 3: Prime Early Access */}
              <section id="prime-early-access" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Is Prime Early Access on 7 October?
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Prime early access is expected on 7 October 2026, but Amazon has not announced it. Neither of Amazon&apos;s September posts mentions an early access date.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The strongest clue is 2023. That year, GIF also started on 8 October, and Amazon gave Prime members access from midnight on 7 October. GIF 2023 and GIF 2025 both gave Prime members a 24-hour head start. Shorter sales, like the 2025 Republic Day Sale, have used a 12-hour window instead.
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E] mt-6">
                  Which Prime plan gets early access?
                </h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  In 2025, Prime, Prime Lite and Prime Shopping Edition members all got early access to GIF, and Shopping Edition still lists early sale access as a benefit. Current Prime prices on Amazon.in:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-100 text-[#1A1A2E] font-bold border-b border-[#E8E8F0]">
                        <th className="p-3">Plan</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr>
                        <td className="p-3 font-semibold">Prime</td>
                        <td className="p-3">₹1,499/year, ₹299/month or ₹599/3 months</td>
                        <td className="p-3 text-gray-600">Full benefits including Prime Video</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Prime Lite</td>
                        <td className="p-3">₹799/year</td>
                        <td className="p-3 text-gray-600">Shopping benefits with reduced video perks</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Prime Shopping Edition</td>
                        <td className="p-3">₹399/year</td>
                        <td className="p-3 text-gray-600">Listed as a limited-period price; shopping-only benefits</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  If you only want early access and faster delivery during the sale, Shopping Edition is the cheapest option. Membership starts as soon as payment goes through, so you can join on 6 or 7 October and still qualify. You can upgrade from Shopping Edition to Lite or Prime later, but you cannot downgrade.
                </p>
              </section>

              {/* SECTION 4: Early Deals Live Now */}
              <section id="early-deals" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Amazon GIF Early Deals Live Now
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Early Deals for the Great Indian Festival went live on Amazon.in on 25 September 2026. These are the prices Amazon itself published that day. Several include bank offers, and prices can change before and during the main sale.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Product</th>
                        <th className="p-4 sm:px-6">Early Deal price (Amazon, 25 Sept 2026)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">OnePlus N6x</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹18,499 (incl. bank offers)</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold">Redmi 17 5G</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹23,999</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">iQOO Z10 Lite 5G</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹15,999 (incl. bank offers)</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold">iQOO Neo 10</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹41,999 (incl. bank offers)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">Apple MacBook Neo 13&quot; (A18 Pro)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹71,990</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold">ASUS Vivobook 15</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹59,990</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">Samsung 55&quot; Mini LED 4K (2026)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹53,900</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold">LG 55&quot; NU87</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹45,990</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">TCL 55&quot; QD-Mini LED</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹62,990</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold">Samsung 653 L side-by-side refrigerator</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹82,990</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">Bosch 8 kg front-load washing machine</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹31,490</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold">Sony Alpha A6700</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹1,25,990</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Prime members also get Prime Everyday Offers during Early Deals: up to 60% off plus up to 5% extra off in fashion and beauty, along with Prime-exclusive coupons.
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E] mt-6">
                  Deals that are teased but not confirmed
                </h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Media reports have floated a few headline prices for the main sale. Treat these as expectations until the price shows on the product page:
                </p>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li>iPhone 16 below ₹70,000</li>
                  <li>Samsung Galaxy S25 Ultra below ₹85,000</li>
                  <li>iPad Air M4 at ₹69,999 (listed at ₹89,900), based on an Amazon teaser</li>
                </ul>
              </section>

              {/* SECTION 5: Deal Formats */}
              <section id="deal-formats" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Amazon GIF 2026 Deal Formats and Daily Timings
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Amazon splits the sale into time slots, and the deepest discounts sit inside specific windows. For the first four &quot;Hero days&quot; of the sale, Amazon has laid out this daily schedule:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-100 text-[#1A1A2E] font-bold border-b border-[#E8E8F0]">
                        <th className="p-3">Time slot</th>
                        <th className="p-3">Deal type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr>
                        <td className="p-3">Midnight to 12 PM</td>
                        <td className="p-3 font-semibold">Grand Opening Deals</td>
                      </tr>
                      <tr>
                        <td className="p-3">12 PM to 8 PM</td>
                        <td className="p-3 font-semibold">Mega Deals</td>
                      </tr>
                      <tr>
                        <td className="p-3">8 PM to midnight</td>
                        <td className="p-3 font-semibold">8 PM Deals</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Alongside these, Amazon lists Blockbuster Deals, Top 100 Deals, Buy More Save More, Exchange Mela, Sample Mania, Amazon Combos, No Cost EMI and exchange offers.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The practical tip here: if a product isn&apos;t at the price you want in the morning, check again after 12 PM and after 8 PM on the Hero days. Different slots put different products on the front page.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Amazon has also added AI shopping tools this year. Its assistant Rufus can show a product&apos;s price history over the last 30 to 90 days and send an alert when the price hits your target. That is the easiest way to check whether a &quot;sale price&quot; is actually lower than what the product sold for last month.
                </p>
              </section>

              {/* SECTION 6: What to Buy */}
              <section id="what-to-buy" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  What to Buy in Amazon Great Indian Festival 2026
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>Smartphones.</strong> Budget and mid-range phones already have Early Deal prices (see the table above), and flagship offers are expected once the main sale opens. Check exchange value for your old phone before 8 October. Smartphones fulfilled by Amazon are usually replacement-only, not returnable, so be sure of the model before buying.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>Laptops and electronics.</strong> The MacBook and Vivobook Early Deals give a starting point for price checks. For more deals across stores, see our <Link href="/stores/categories/electronics" className="text-[#5B4FBE] font-semibold hover:underline">electronics offers page</Link>.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>TVs and home appliances.</strong> Amazon has already listed 55-inch Mini LED and QD-Mini LED TVs from Samsung, LG and TCL, plus refrigerators and washing machines. No Cost EMI is most useful here. Our <Link href="/stores/categories/home-and-kitchen" className="text-[#5B4FBE] font-semibold hover:underline">home and kitchen offers</Link> cover appliance deals from other retailers too.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>Fashion and beauty.</strong> Prime Everyday Offers give Prime members extra discounts in these categories during Early Deals, and Amazon Pay Balance orders of ₹300+ in fashion and beauty get ₹20 cashback. Browse our <Link href="/stores/categories/fashion" className="text-[#5B4FBE] font-semibold hover:underline">fashion</Link> and <Link href="/stores/categories/beauty" className="text-[#5B4FBE] font-semibold hover:underline">beauty</Link> offers for festive wear and gifting.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>Cameras.</strong> The Sony Alpha A6700 Early Deal at ₹1,25,990 is one of the few camera prices Amazon has published so far.
                </p>
              </section>

              {/* SECTION 7: Amazon vs Flipkart */}
              <section id="amazon-vs-flipkart" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Amazon Great Indian Festival vs Flipkart Big Billion Days 2026
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Both sales overlap this year, and your bank card is the biggest factor in choosing between them.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Feature</th>
                        <th className="p-4 sm:px-6">Amazon Great Indian Festival 2026</th>
                        <th className="p-4 sm:px-6">Flipkart Big Billion Days 2026</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">Member early access</td>
                        <td className="p-4 sm:px-6">7 October (expected)</td>
                        <td className="p-4 sm:px-6">8 October, from midnight</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold">Public sale opens</td>
                        <td className="p-4 sm:px-6 font-bold text-green-700">8 October</td>
                        <td className="p-4 sm:px-6">9 October</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">Bank partner</td>
                        <td className="p-4 sm:px-6 font-bold text-[#FF5722]">SBI (10% instant)</td>
                        <td className="p-4 sm:px-6 font-bold text-[#FF5722]">Axis Bank and ICICI Bank (up to 10% instant)</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold">Member extra</td>
                        <td className="p-4 sm:px-6">Prime: up to 10% extra</td>
                        <td className="p-4 sm:px-6">Plus/premium members: up to 12% during early access</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">Co-branded card</td>
                        <td className="p-4 sm:px-6">Amazon Pay ICICI: 5% unlimited cashback (Prime)</td>
                        <td className="p-4 sm:px-6">Flipkart Axis Bank card offers</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold">End date</td>
                        <td className="p-4 sm:px-6">Not announced</td>
                        <td className="p-4 sm:px-6">Not announced</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  On 8 October, Amazon&apos;s sale is open to everyone while Flipkart is still in member-only early access. If you hold an SBI card, Amazon&apos;s offer applies to you. If you hold an Axis or ICICI card, Flipkart&apos;s offer is the one you can use. Amazon Pay ICICI cardholders get uncapped 5% cashback on Amazon, which can beat both on large orders.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Before buying anything expensive, open the same product on both sites. For the full Flipkart side, read our <Link href="/blog/big-billion-days-2026-flipkart-upcoming-sales" className="text-[#5B4FBE] font-semibold hover:underline">Big Billion Days 2026 guide</Link> and our detailed <Link href="/blog/big-billion-days-vs-amazon-great-indian-festival" className="text-[#5B4FBE] font-semibold hover:underline">Big Billion Days vs Amazon Great Indian Festival comparison</Link>. Current Flipkart codes are on our <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Flipkart coupon page</Link>.
                </p>
              </section>

              {/* SECTION 8: Amazon Upcoming Sales */}
              <section id="upcoming-sales" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Amazon Upcoming Sales 2026–2027: Full Calendar
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Great Indian Festival is Amazon India&apos;s biggest sale of the year, but several more follow it. Here is the full calendar, with past 2026 sales marked for reference.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Amazon sale</th>
                        <th className="p-4 sm:px-6">Dates</th>
                        <th className="p-4 sm:px-6">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white text-gray-400">
                        <td className="p-4 sm:px-6">Great Republic Day Sale 2026</td>
                        <td className="p-4 sm:px-6">From 16 January 2026</td>
                        <td className="p-4 sm:px-6">Past</td>
                      </tr>
                      <tr className="bg-[#F8F8FF] text-gray-400">
                        <td className="p-4 sm:px-6">Great Summer Sale 2026</td>
                        <td className="p-4 sm:px-6">8 May (Prime), 9–17 May 2026</td>
                        <td className="p-4 sm:px-6">Past</td>
                      </tr>
                      <tr className="bg-white text-gray-400">
                        <td className="p-4 sm:px-6">Prime Day 2026</td>
                        <td className="p-4 sm:px-6">4–6 July 2026</td>
                        <td className="p-4 sm:px-6">Past</td>
                      </tr>
                      <tr className="bg-[#F8F8FF] text-gray-400">
                        <td className="p-4 sm:px-6">Great Freedom Sale 2026</td>
                        <td className="p-4 sm:px-6">From 7 August 2026</td>
                        <td className="p-4 sm:px-6">Past</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">GIF Early Deals</td>
                        <td className="p-4 sm:px-6">Since 25 September 2026</td>
                        <td className="p-4 sm:px-6 font-bold text-green-700">Live now</td>
                      </tr>
                      <tr className="bg-purple-100 border-y-2 border-[#5B4FBE]">
                        <td className="p-4 sm:px-6 font-bold text-[#1A1A2E]">Great Indian Festival 2026</td>
                        <td className="p-4 sm:px-6 font-bold text-[#1A1A2E]">From 8 October 2026</td>
                        <td className="p-4 sm:px-6 font-bold text-green-700">Confirmed</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">GIF Diwali phase</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Late October to early November 2026</td>
                        <td className="p-4 sm:px-6 text-orange-600 font-medium">Expected</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold">Black Friday Sale 2026</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Around 27–30 November 2026</td>
                        <td className="p-4 sm:px-6 text-orange-600 font-medium">Expected</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold">Christmas and year-end offers</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Late December 2026</td>
                        <td className="p-4 sm:px-6 text-orange-600 font-medium">Expected</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold">Great Republic Day Sale 2027</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Around mid-January 2027</td>
                        <td className="p-4 sm:px-6 text-orange-600 font-medium">Expected</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Amazon has not announced a separate Dussehra sale this year. Dussehra falls during the Great Indian Festival, so Dussehra shopping happens inside GIF. We collect offers for each occasion on our <Link href="/festival-offers/dusshera-offers" className="text-[#5B4FBE] font-semibold hover:underline">Dussehra offers</Link>, <Link href="/festival-offers/diwali-offers" className="text-[#5B4FBE] font-semibold hover:underline">Diwali offers</Link>, <Link href="/festival-offers/black-friday-offers" className="text-[#5B4FBE] font-semibold hover:underline">Black Friday offers</Link> and <Link href="/festival-offers/christmas-offers" className="text-[#5B4FBE] font-semibold hover:underline">Christmas offers</Link> pages.
                </p>
              </section>

              {/* SECTION 9: Fees, Returns & Stacking */}
              <section id="fees-and-returns" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Fees, Returns and Offer Stacking: What to Check Before You Pay
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>Marketplace fee.</strong> Amazon charges a flat ₹5 marketplace fee per order, including for Prime members. It applies across prepaid methods, including Amazon Pay Balance. On Pay on Delivery orders it is not shown as a separate line.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>Returns.</strong> Amazon sets the return or replacement window per product, and the sale does not change that. Check the return policy on each product page, especially for phones, which are usually replacement-only.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  <strong>Stacking offers.</strong> Amazon has no single rule for combining offers. Bank discounts, coupons, exchange bonuses and No Cost EMI can be combined on some products and not on others. The payment page shows exactly which offers have been applied, so check the price breakdown before confirming. On No Cost EMI, also look for the bank&apos;s processing fee and GST.
                </p>
              </section>

              {/* SECTION 10: How to Get Best Price */}
              <section id="how-to-save" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  How to Get the Best Price in Amazon GIF 2026
                </h2>
                <ol className="list-decimal pl-5 text-[#4A4A6A] space-y-3">
                  <li><strong>Build your wishlist now.</strong> Add products during Early Deals and note their prices. You will know on 8 October whether the sale price is actually lower.</li>
                  <li><strong>Set a Rufus price alert.</strong> Use the price-history view to see the 30 to 90-day trend and set a target price.</li>
                  <li><strong>Decide on Prime before 7 October.</strong> If you want early access, join or renew before the expected early access window. Shopping Edition is the cheapest route.</li>
                  <li><strong>Pick your card.</strong> SBI for the 10% instant discount on smaller orders, Amazon Pay ICICI for uncapped 5% cashback on bigger ones (with Prime).</li>
                  <li><strong>Add coupons on top.</strong> Many product pages show an extra &quot;apply coupon&quot; checkbox. Our <Link href="/festival-offers/amazongreatindiansale-offers" className="text-[#5B4FBE] font-semibold hover:underline">Amazon Great Indian Sale offers page</Link> lists sale deals and coupons in one place.</li>
                  <li><strong>Shop the right time slot.</strong> On the first four Hero days, check the Grand Opening, Mega and 8 PM slots separately.</li>
                  <li><strong>Check the delivery date.</strong> For anything you need before Diwali, confirm the estimated delivery at checkout.</li>
                </ol>
                <p className="text-[#4A4A6A] leading-relaxed">
                  For more general tips on stacking offers across stores, read our guide on <Link href="/blog/how-to-save-money-shopping-online-india" className="text-[#5B4FBE] font-semibold hover:underline">how to save money shopping online in India</Link>.
                </p>
              </section>

              {/* SECTION 11: FAQ */}
              <section id="faq" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <HelpCircle className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Frequently Asked Questions (FAQ)
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
                  The Great Indian Festival gives you about ten days from today to prepare: enough time to shortlist products, decide on Prime and work out which card gets you the bigger discount. The details still missing, the SBI cap, the Prime early access time and the end date, are what decide the final price, so check back before 8 October. We update this page as soon as Amazon confirms them.
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
                    <span className="text-gray-600">8 Oct 2026 (Early Access: Expected 7 Oct)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Early Access For</strong>
                    <span className="text-gray-600">Amazon Prime members</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Bank Partners</strong>
                    <span className="text-gray-600">SBI (10% instant discount)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Member Discount</strong>
                    <span className="text-gray-600">Up to 10% extra for Prime members</span>
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
                    { title: 'When Does Amazon GIF Start?', href: '#when-does-it-start' },
                    { title: 'Bank Offers', href: '#bank-offers' },
                    { title: 'Prime Early Access', href: '#prime-early-access' },
                    { title: 'Early Deals Live Now', href: '#early-deals' },
                    { title: 'Deal Formats', href: '#deal-formats' },
                    { title: 'What to Buy', href: '#what-to-buy' },
                    { title: 'Amazon vs Flipkart', href: '#amazon-vs-flipkart' },
                    { title: 'Amazon Upcoming Sales', href: '#upcoming-sales' },
                    { title: 'Fees and Returns', href: '#fees-and-returns' },
                    { title: 'How to Get Best Price', href: '#how-to-save' },
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
                  Stack Amazon sale prices with verified coupons on electronics, fashion, beauty &amp; more.
                </p>
                <Link href="/stores/amazon-coupon-code" className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2">
                  <span>View Amazon Coupons</span>
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
