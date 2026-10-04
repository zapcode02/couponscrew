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

const PAGE_URL = 'https://www.couponscrew.com/blog/buy-phone-now-or-wait-for-sale-2026';
const PAGE_TITLE = 'Buy Your Phone Now or Wait for the Sale? Smartphones to Watch in October 2026';

const RELATED_POSTS = [
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
    slug: 'amazon-great-indian-festival-2026-upcoming-sales',
    title: 'Amazon Great Indian Festival 2026: Date, SBI Offer & Deals',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790492673/amazon-great-indian-festival-2026-upcoming-sales_zz7w76.webp',
    date: 'Sep 27, 2026',
    readTime: '8 min read',
    excerpt: "Complete guide to Amazon Great Indian Festival 2026 — start date (8 October), Prime early access (7 October), SBI 10% offer, live Early Deal prices, deal timings, and Amazon's full sale calendar.",
  },
  {
    slug: 'october-2026-sale-calendar-india',
    title: 'October 2026 Sale Calendar: Amazon, Flipkart, Myntra, Ajio, Nykaa and What Comes After',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1791033597/October_2026_Sale_Calendar_Festivities_i9ydzz.webp',
    date: 'Oct 3, 2026',
    readTime: '10 min read',
    excerpt: 'Every October 2026 sale date in one place: Amazon from 8 Oct, Flipkart from 9 Oct, Myntra from 8 Oct, plus Ajio, Nykaa and the festival dates to plan around.',
  },
];

const FAQS = [
  {
    q: 'Should I buy a phone now or wait for Big Billion Days 2026?',
    a: "Wait if you can. Flipkart Big Billion Days starts on 9 October 2026 and Flipkart has already teased lower prices on the iPhone 17, Galaxy S25 and Galaxy S25 FE. Buy now only if you need a phone urgently or today's price already matches the teased price.",
  },
  {
    q: 'Will the iPhone 17 be cheaper in the Big Billion Days sale?',
    a: 'Yes, Flipkart has teased the iPhone 17 from under ₹80,000 in Big Billion Days 2026. It was listed at ₹98,900 on Flipkart on 3 October. The teased price is an effective price and is likely to include a bank card offer.',
  },
  {
    q: 'Why are smartphone prices going up in 2026?',
    a: 'Smartphone prices are rising because of a global shortage of memory chips. Chipmakers are prioritising memory for AI data centres, which has raised costs for phone makers. TechArc data shows Indian phone prices rose 7.9% in the first five months of 2026.',
  },
  {
    q: 'Is it worth waiting for Black Friday or Diwali to buy a phone?',
    a: 'For most buyers, no. The October sales have the strongest phone offers, and analysts expect memory-driven price increases to continue. Diwali offers on 8 November may match the October prices on some models, but there is no sign they will be lower.',
  },
  {
    q: 'Are the teased sale prices the final prices?',
    a: 'No. Teased prices are usually effective prices after a bank discount and other offers. The final amount depends on your card, the discount cap, the variant you choose and whether you exchange an old phone.',
  },
];

export default function BuyPhoneNowOrWait2026Blog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">Buy Your Phone Now or Wait for the Sale</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Header */}
              <div className="space-y-4">
                <span className="inline-block bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Electronics
                </span>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  Buy Your Phone Now or Wait for the Sale? Smartphones to Watch in October 2026
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Oct 4, 2026</span>
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
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1791102378/Buy_Now_or_Wait_for_the_Sale_wbznsq.webp"
                  alt="Buy Your Phone Now or Wait for the Sale? Smartphones to Watch in October 2026"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  <strong>If you can wait until 8 or 9 October, wait.</strong> Amazon Great Indian Festival starts on 8 October and Flipkart Big Billion Days on 9 October, and both have teased phone prices well below today&apos;s listings. But do not plan to wait much past the sale. Phone prices in India have been rising all year because of a memory chip shortage, and analysts expect high prices to last into 2027.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed italic">
                  Last updated: 4 October 2026. Prices are from 3 October; we will add live sale prices on 8 and 9 October.
                </p>
              </div>

              {/* SECTION 1: Short answer */}
              <section id="short-answer" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  The short answer: when to buy and when to wait
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Your situation</th>
                        <th className="p-4 sm:px-6">What to do</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Your phone works and you can wait five days</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Wait for 8 October (Amazon) or 9 October (Flipkart)</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Your phone is broken and you need one now</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Buy now, but check Amazon&apos;s Early Deals and Flipkart&apos;s Curtain Raiser first</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">You want an iPhone 17, Galaxy S25 or Galaxy S25 FE</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Wait for Flipkart Big Billion Days; these have teased sale prices</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">You want a OnePlus or iQOO phone</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Wait for Amazon Great Indian Festival; both brands sell through Amazon</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">You are thinking of waiting for Black Friday or next year</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not recommended for phones this year; see the price trend below</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">You are waiting for a newly launched model to get cheaper</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Check whether it has any sale offer first; new launches rarely get deep festive discounts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 2: Why waiting is riskier */}
              <section id="why-waiting-riskier" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Why waiting longer is riskier this year
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  In most years, phone prices drift down after launch, so waiting is usually safe. 2026 is different. Phones have been getting more expensive month by month, and the October sales may be the lowest prices you see for a while.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The reason is memory. Chipmakers are sending more of their RAM and storage production to AI data centres, where margins are higher, and phone makers are paying more for what is left. According to market tracker TechArc, Indian smartphone prices rose 7.9% in the first five months of 2026, after staying nearly flat in 2025. Price increases outnumbered price cuts by more than four to one.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Budget phones have been hit hardest. TechArc&apos;s data shows phones under ₹10,000 rose 17.6% and phones between ₹10,000 and ₹20,000 rose 13.9% over the same period. Mid-range phones between ₹20,000 and ₹30,000 rose 5.6%.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Apple raised prices in India too. After launching the iPhone 18 Pro series in September, it raised the iPhone 17 from ₹82,900 to ₹99,900 and the iPhone 16 from ₹79,900 to ₹89,900.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  IDC analyst Kiranjeet Kaur has said memory shortages and higher prices are likely to last until at least the end of 2027, though increases should slow down. For a buyer, that means the festive sale is a good moment to buy, and holding out for a much better price later is a gamble.
                </p>
              </section>

              {/* SECTION 3: Phones with teased sale prices */}
              <section id="teased-prices" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Phones with teased sale prices
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  These are the phones where Flipkart has already published a sale price teaser. The teased prices are &quot;effective&quot; prices, which means they usually include a bank card discount and other offers. The price before offers will be higher.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Phone</th>
                        <th className="p-4 sm:px-6">Price on 3 Oct</th>
                        <th className="p-4 sm:px-6">Teased BBD price</th>
                        <th className="p-4 sm:px-6">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">iPhone 17</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹98,900 on Flipkart (Apple price ₹99,900)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">From ₹7x,xxx (under ₹80,000)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Below its original launch price of ₹82,900</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Samsung Galaxy S25</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹69,999</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Under ₹60,000</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Samsung Galaxy is a title sponsor of BBD</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Samsung Galaxy S25 FE</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹54,999</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Under ₹50,000</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Likely includes the bank offer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The iPhone 17 teaser is the one to watch. After Apple&apos;s September price rise, a sale price under ₹80,000 would put it below what the phone cost at launch. That is rare for an iPhone during a price-rise year.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  For full Flipkart sale details, including early access and bank cards, see our <Link href="/blog/big-billion-days-2026-flipkart-upcoming-sales" className="text-[#5B4FBE] font-semibold hover:underline">Big Billion Days 2026 guide</Link>.
                </p>
              </section>

              {/* SECTION 4: Phones to watch on Amazon */}
              <section id="amazon-phones" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Phones to watch on Amazon
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Amazon has not published phone-specific sale prices yet. OnePlus and iQOO sell through Amazon in India, so their phones usually get their biggest festive offers there. Models to keep on your wishlist:
                </p>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>OnePlus:</strong> OnePlus 15, OnePlus 15R, Nord 6, Nord CE 6</li>
                  <li><strong>iQOO:</strong> iQOO 15, iQOO 15R, iQOO Z11, iQOO Z11x</li>
                </ul>
                <p className="text-[#4A4A6A] leading-relaxed">
                  You will see &quot;expected&quot; Amazon sale prices for these phones on many sites. They are guesses. Note today&apos;s price instead and compare it on 8 October. Our <Link href="/blog/amazon-great-indian-festival-2026-upcoming-sales" className="text-[#5B4FBE] font-semibold hover:underline">Amazon Great Indian Festival 2026 guide</Link> covers Prime early access and the SBI card offer.
                </p>
              </section>

              {/* SECTION 5: How to work out the real sale price */}
              <section id="real-price" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  How to work out the real sale price
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The price on the sale banner is often not what you pay, and it is often not what the teaser promised either. Work out the final price in this order:
                </p>
                <ol className="list-decimal pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>Start with the listed sale price</strong> for the exact variant you want. Check RAM and storage; teasers usually use the base variant.</li>
                  <li><strong>Subtract the bank instant discount</strong>, but check the cap. For example, a 10% discount capped at ₹1,500 saves ₹1,500 on a ₹50,000 phone, not ₹5,000.</li>
                  <li><strong>Subtract any coupon or app-specific offer</strong> that applies at checkout.</li>
                  <li><strong>Subtract exchange value only if you are exchanging a phone.</strong> If you are not, ignore exchange numbers in the headline price.</li>
                  <li><strong>Add anything you will have to pay for separately</strong>, such as a charger if it is not in the box, or extended warranty.</li>
                </ol>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Here is how that works on the Galaxy S25 FE as an example. It is listed at ₹54,999. A 10% instant bank discount would take ₹5,499 off, bringing it to about ₹49,500, if the bank&apos;s cap allows that much. If the cap is lower, the final price will be higher than the teaser. Check the offer terms on the product page before you pay.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Amazon accepts SBI cards for its 10% instant discount; Flipkart has listed Axis Bank and ICICI Bank cards. If you have only one of these, that may decide the platform for you. Our <Link href="/blog/big-billion-days-vs-amazon-great-indian-festival" className="text-[#5B4FBE] font-semibold hover:underline">Big Billion Days vs Amazon Great Indian Festival comparison</Link> lists the card offers side by side.
                </p>
              </section>

              {/* SECTION 6: What to check before you buy */}
              <section id="what-to-check" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  What to check before you buy a phone in the sale
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  A lower price is only a good deal if the phone is right for you. Before checking out:
                </p>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>Seller:</strong> Buy from the brand&apos;s authorised seller or the platform&apos;s own fulfilled listing. Check the seller name under the price.</li>
                  <li><strong>Warranty:</strong> Indian warranty from the brand, valid from the invoice date. Grey imports may be cheaper but often lack it.</li>
                  <li><strong>Variant:</strong> Make sure the colour, RAM and storage in your cart match the teased price.</li>
                  <li><strong>Return or replacement window:</strong> Phones usually have a replacement-only policy for defects, not a no-questions return. Know the window before you open the box.</li>
                  <li><strong>Software updates:</strong> For a phone you plan to keep for three or more years, check how many years of Android or iOS updates the brand promises for that model.</li>
                  <li><strong>No Cost EMI terms:</strong> &quot;No Cost&quot; EMI can still include a processing fee, and you may lose part of the bank instant discount if you choose EMI. Compare the full amount you will pay.</li>
                </ul>
              </section>

              {/* SECTION 7: Should you buy today */}
              <section id="buy-today" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Should you buy today, before the sale?
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">Only if one of these applies:</p>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>You need a phone now.</strong> A broken phone costs you more in lost time than a few thousand rupees.</li>
                  <li><strong>Today&apos;s price already matches the teased price.</strong> Amazon&apos;s Early Deals have been live since 25 September, and Flipkart&apos;s Curtain Raiser opens selected products at sale prices five days before Big Billion Days. If the phone you want is already at its sale price, there is no reason to wait.</li>
                  <li><strong>The model is likely to sell out.</strong> Popular colours and storage variants of teased phones sometimes go out of stock in the first hours. Early access helps here: Prime members on Amazon (reported for 7 October) and Plus, Black, VIP and Flipkart credit card holders on Flipkart (8 October).</li>
                </ul>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Otherwise, waiting until 8 or 9 October costs you nothing and gives you the teased prices plus the bank offers.
                </p>
              </section>

              {/* SECTION 8: Dates to remember */}
              <section id="dates-to-remember" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Dates to remember
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Date</th>
                        <th className="p-4 sm:px-6">What happens</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Now</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Amazon Early Deals and Flipkart Curtain Raiser are live on selected products</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">7 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Amazon Prime early access (reported)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">8 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Amazon Great Indian Festival opens; Flipkart early access for eligible members</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">9 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Flipkart Big Billion Days opens for everyone</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">11 Oct onwards</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Navratri; delivery may slow during the sale</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The full list of October and November sales is in our <Link href="/blog/october-2026-sale-calendar-india" className="text-[#5B4FBE] font-semibold hover:underline">October 2026 sale calendar</Link>. Current phone and gadget offers across stores are on our <Link href="/stores/categories/electronics" className="text-[#5B4FBE] font-semibold hover:underline">electronics offers page</Link>, and coupon codes that stack with sale prices are on the <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon</Link> and <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Flipkart</Link> store pages.
                </p>
              </section>

              {/* SECTION 9: FAQ */}
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
                  A good rule for this sale: decide which phone you want before 8 October, note its price today, and buy when the final price after your bank offer comes in below that. If the phone you want has no teased price and does not drop on sale day, the October sales may still be its lowest price this year, given where phone prices have been heading.
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
              {/* Sidebar Box 1: Key Details */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-[#E8E8F0] text-[#5B4FBE]">
                  <Check className="w-5 h-5 shrink-0" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Key Details</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">iPhone 17 BBD Teaser</strong>
                    <span className="text-gray-600">Under ₹80,000 (listed ₹98,900 on 3 Oct)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Galaxy S25 BBD Teaser</strong>
                    <span className="text-gray-600">Under ₹60,000 (listed ₹69,999)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Galaxy S25 FE BBD Teaser</strong>
                    <span className="text-gray-600">Under ₹50,000 (listed ₹54,999)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Price Trend 2026</strong>
                    <span className="text-gray-600">+7.9% in first 5 months (TechArc)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Sale Dates</strong>
                    <span className="text-gray-600">Amazon 8 Oct · Flipkart 9 Oct</span>
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
                    { title: 'When to Buy or Wait', href: '#short-answer' },
                    { title: 'Why Waiting Is Riskier', href: '#why-waiting-riskier' },
                    { title: 'Phones With Teased Prices', href: '#teased-prices' },
                    { title: 'Phones to Watch on Amazon', href: '#amazon-phones' },
                    { title: 'Working Out the Real Price', href: '#real-price' },
                    { title: 'What to Check Before Buying', href: '#what-to-check' },
                    { title: 'Should You Buy Today?', href: '#buy-today' },
                    { title: 'Dates to Remember', href: '#dates-to-remember' },
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
                <Link href="/stores/categories/electronics" className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2">
                  <span>View Electronics Deals</span>
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
