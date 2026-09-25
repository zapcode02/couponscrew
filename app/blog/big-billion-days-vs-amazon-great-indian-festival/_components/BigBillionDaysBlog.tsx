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
  ShoppingBag
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/big-billion-days-vs-amazon-great-indian-festival';
const PAGE_TITLE = 'Big Billion Days vs Great Indian Festival 2026: Dates, Bank Offers and Which Sale Is Better';

const RELATED_POSTS = [
  {
    slug: 'upi-changes-2000-payments-merchants-mdr-2026',
    title: 'UPI Is Changing: ₹2,000+ Payments Raise New Concerns for Merchants',
    category: 'Fintech Guides',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789908955/upi-changes-2000-payments-merchants-mdr-2026_cwjqa7.webp',
    date: 'Sep 20, 2026',
    readTime: '6 min read',
    excerpt: 'From October 15, 2026, UPI transactions above ₹2,000 at merchants attract a 0.4% MDR. Here is who pays, who does not, and what your business should do now.',
  },
  {
    slug: 'bigg-boss-season-20-where-to-watch-deals',
    title: 'Bigg Boss Season 20 (2026): Where to Watch, Price & Best Deals',
    category: 'Entertainment Guides',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789314709/bigg-boss-season-20-where-to-watch-deals_ggtlzz.webp',
    date: 'Sep 6, 2026',
    readTime: '7 min read',
    excerpt: "Bigg Boss 20 is streaming on JioHotstar from September 6, 2026. Here's where to watch, what it costs, confirmed contestants, and the best deals.",
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
    q: 'When does Flipkart Big Billion Days 2026 start?',
    a: 'Flipkart Big Billion Days 2026 starts on October 9 for all shoppers. Flipkart Plus, VIP and Flipkart credit card members get early access from midnight on October 8.',
  },
  {
    q: 'When does the Amazon Great Indian Festival 2026 start?',
    a: 'The Amazon Great Indian Festival 2026 starts on October 8 for all shoppers. Prime members get early access from October 7.',
  },
  {
    q: 'Which bank cards get a discount in the Big Billion Days sale?',
    a: 'Axis Bank and ICICI Bank cards get up to 10% instant discount on eligible transactions. Supermoney users also get 10% off on their first transaction.',
  },
  {
    q: 'Which bank card gets a discount in the Amazon Great Indian Festival sale?',
    a: 'SBI credit and debit cards get a 10% instant discount on eligible transactions, including eligible EMI transactions.',
  },
  {
    q: 'Is Flipkart Big Billion Days or Amazon Great Indian Festival better?',
    a: 'Neither is better for everyone. Choose based on your bank card and product: Axis or ICICI cardholders usually save more on Flipkart, and SBI cardholders usually save more on Amazon.',
  },
  {
    q: 'Will the iPhone 17 be cheaper in the Big Billion Days sale?',
    a: 'Flipkart has teased an effective iPhone 17 price under ₹80,000 during Big Billion Days. The exact price has not been revealed and depends on bank offers and exchange.',
  },
  {
    q: 'Do I need Prime to shop in the Great Indian Festival?',
    a: 'No, the Great Indian Festival is open to everyone from October 8. Prime membership gives early access from October 7 and up to 10% extra savings on select deals.',
  },
  {
    q: 'Can I use a bank discount and a coupon on the same order?',
    a: 'Often yes, but it depends on the specific offer. Some bank discounts exclude orders paid partly with wallet balance or gift cards, so check the offer terms at checkout.',
  },
  {
    q: 'Is No Cost EMI really free?',
    a: 'Not always. The interest is usually given back as a discount, but processing fees and GST on interest may still apply depending on the bank.',
  },
  {
    q: 'When will the sales end?',
    a: 'Neither Flipkart nor Amazon has announced an end date for 2026. This page will be updated when they do.',
  }
];

export default function BigBillionDaysBlog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">Big Billion Days vs Great Indian Festival 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Header */}
              <div className="space-y-4">
                <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Festival Offers
                </span>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  Big Billion Days vs Amazon Great Indian Festival 2026: Dates, Bank Offers and Which Sale Is Better
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Sep 25, 2026</span>
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
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1790298079/big-billion-days-vs-amazon-great-indian-festival_dmjxxj.webp"
                  alt="Big Billion Days vs Amazon Great Indian Festival 2026"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  Flipkart Big Billion Days 2026 opens to everyone on October 9, with early access for Flipkart Plus, VIP, Black and Flipkart credit card members from midnight on October 8. The Amazon Great Indian Festival sale opens to everyone on October 8, with Prime members getting in a day earlier on October 7. Your bank card is the biggest deciding factor: Flipkart has Axis Bank and ICICI Bank, Amazon has SBI.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  This guide lines up both sales side by side, explains what each offer actually means at checkout, and tells you which sale suits which kind of buyer. It will be updated as live prices go up.
                </p>
              </div>

              {/* ARTICLE SECTION 1: At a glance */}
              <section id="at-a-glance" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Big Billion Days vs Great Indian Festival 2026 at a glance
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Feature</th>
                        <th className="p-4 sm:px-6">Flipkart Big Billion Days 2026</th>
                        <th className="p-4 sm:px-6">Amazon Great Indian Festival 2026</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Opens for everyone</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">October 9</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">October 8</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Early access</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Midnight, October 8 (Plus, VIP, Black and Flipkart credit card members)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">October 7 (Prime members)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Bank partners</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Axis Bank and ICICI Bank</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">SBI</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Instant bank discount</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Up to 10% on eligible transactions</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">10% on eligible credit and debit card transactions, including EMI</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Member extras</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Higher bank discount for Black members during early access, reported at up to 15%</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Up to 10% extra savings for Prime members on select deals</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Other payment offers</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Supermoney offer on first transaction, Flipkart EMI and Flipkart Pay Later offers</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">No Cost EMI on eligible purchases</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-[#4A4A6A] italic mt-2">Both platforms can change terms during the sale, so the offer page shown at checkout is the final word.</p>
              </section>

              {/* ARTICLE SECTION 2: When does Flipkart BBD start? */}
              <section id="bbd-start" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  When does Flipkart Big Billion Days 2026 start?
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Flipkart Big Billion Days 2026 starts on October 9 for all shoppers. According to Flipkart's official Big Billion Days store page, Flipkart Plus members, VIP members and Flipkart credit card holders get a 24-hour head start from midnight on October 8. Some reports also include Flipkart Black members in this early window.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Flipkart has not published an end date yet. In past years the big billion sale has run for about a week, often with a second wave of deals closer to Diwali, so it is worth checking back even after the opening rush.
                </p>
              </section>

              {/* ARTICLE SECTION 3: When does Amazon GIF start? */}
              <section id="gif-start" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  When does the Amazon Great Indian Festival sale start?
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The Amazon Great Indian Festival 2026 opens to all shoppers on October 8, and Prime members get early access from October 7. That puts Amazon's general opening on the same day as Flipkart's member-only early access, which makes side-by-side price checks easy for anyone who has both apps.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The event goes by many names in search. Shoppers look for it as the great Indian festival sale Amazon runs every autumn, the Amazon India Great Indian Festival, the Amazon Great India Festival sale, the great India Amazon sale, or simply the Indian great festival or India great festival. They all refer to the same annual festive sale on Amazon.in.
                </p>
              </section>

              {/* ARTICLE SECTION 4: Bank Offers */}
              <section id="bank-offers" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Which bank offers apply in each sale?
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Flipkart's instant discount works on Axis Bank and ICICI Bank cards, and Amazon's works on SBI credit and debit cards. If you hold only one of these, that alone often decides where you should buy a big-ticket item.
                </p>
                <h3 className="font-bold text-[#1A1A2E] text-lg mt-4">Flipkart Big Billion Days bank offers</h3>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>Axis Bank and ICICI Bank cards:</strong> up to 10% instant discount on eligible transactions.</li>
                  <li><strong>Flipkart Axis Bank Credit Card:</strong> instant discount plus cashback on eligible orders.</li>
                  <li><strong>Supermoney:</strong> 10% off on the first transaction, as listed on Flipkart's sale page.</li>
                  <li><strong>Membership tiers:</strong> Flipkart Black members are reported to get a higher combined bank discount of up to 15% during early access.</li>
                </ul>
                <h3 className="font-bold text-[#1A1A2E] text-lg mt-4">Amazon Great Indian Festival bank offers</h3>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>SBI credit and debit cards:</strong> 10% instant discount on eligible transactions, and EMI transactions on eligible cards also qualify.</li>
                  <li><strong>Prime members:</strong> up to 10% extra savings on select deals, on top of priority access.</li>
                </ul>
              </section>

              {/* ARTICLE SECTION 5: Early Access */}
              <section id="early-access" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Early access: Amazon Prime vs Flipkart Plus, VIP and Black
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Early access gives members roughly a day to buy before stock thins out. Prime members start on October 7 and Flipkart's eligible members start at midnight on October 8.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Whether a membership is worth paying for depends on one thing: are you buying a limited-stock item on day one? For a flagship phone at a teased price, early access can be the difference between getting the deal and seeing "sold out". For everyday shopping like clothes or kitchen items, stock usually lasts, and the general sale works fine.
                </p>
              </section>

              {/* ARTICLE SECTION 6: Smartphone Deals */}
              <section id="smartphone-deals" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Smartphone deals teased so far
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Smartphones are the headline category for both sales. Here is what has been officially teased or reported as of late September. These are teaser prices, so treat them as a guide until the live listing appears.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Phone</th>
                        <th className="p-4 sm:px-6">Platform</th>
                        <th className="p-4 sm:px-6">What's been teased</th>
                        <th className="p-4 sm:px-6">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">iPhone 17</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Flipkart</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Effective price shown as "From ₹7x,xxx", which means under ₹80,000 with offers applied. Current Flipkart listing is ₹98,900.</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Teased, exact price not revealed</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Samsung Galaxy S25</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Flipkart</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Under ₹60,000 including price cuts and bank discounts</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Teased</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Samsung Galaxy S25 FE</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Flipkart</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Under ₹50,000</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Teased</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">iPhone 16 series</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Amazon</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Price cuts promoted</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Price not revealed yet</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Samsung Galaxy S25 Ultra</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Amazon</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Festive price cut promoted</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Price not revealed yet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ARTICLE SECTION 7: Which sale is better */}
              <section id="which-is-better" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Which sale is better for you?
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Neither sale is better for everyone. The right choice depends on your bank card, your membership and what you're buying. Use this as a quick decision guide:
                </p>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2 mt-4">
                  <li><strong>You have an SBI credit or debit card:</strong> Amazon Great Indian Festival</li>
                  <li><strong>You have an Axis Bank or ICICI Bank card:</strong> Flipkart Big Billion Days</li>
                  <li><strong>You're a Prime member and want day-one stock:</strong> Amazon, from October 7</li>
                  <li><strong>You're Flipkart Plus, VIP or Black:</strong> Flipkart, from midnight October 8</li>
                  <li><strong>You want the iPhone 17:</strong> Flipkart, based on current teasers</li>
                  <li><strong>You have cards from both sides:</strong> Compare both on October 8 before paying</li>
                </ul>
              </section>

              {/* ARTICLE SECTION 8: FAQ */}
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
                  The sale opens in less than two weeks. Shortlist what you need, check which bank card you hold, and compare both apps on October 8 when both are live. The best deal is the one that fits your card and your actual shopping list, not the biggest number on a banner.
                </p>
              </div>

              {/* Share & Copy Link Footer Bar (Redesigned per Image 3) */}
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
              {/* Sidebar Box 1: Key Details Widget */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-[#E8E8F0] text-[#5B4FBE]">
                  <Check className="w-5 h-5 shrink-0" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Key Sale Highlights</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Flipkart BBD Dates</strong>
                    <span className="text-gray-600">Oct 9 (Oct 8 for Plus/VIP)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Amazon GIF Dates</strong>
                    <span className="text-gray-600">Oct 8 (Oct 7 for Prime)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Flipkart Bank Partner</strong>
                    <span className="text-gray-600">Axis Bank & ICICI Bank (10%)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Amazon Bank Partner</strong>
                    <span className="text-gray-600">SBI Credit & Debit Cards (10%)</span>
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
                    { title: "At a glance", href: "#at-a-glance" },
                    { title: "When does Flipkart BBD start?", href: "#bbd-start" },
                    { title: "When does Amazon GIF start?", href: "#gif-start" },
                    { title: "Bank offers", href: "#bank-offers" },
                    { title: "Early access", href: "#early-access" },
                    { title: "Smartphone deals", href: "#smartphone-deals" },
                    { title: "Which sale is better?", href: "#which-is-better" },
                    { title: "Frequently Asked Questions", href: "#faq" },
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

              {/* Sidebar Box 2: Related Posts Widget */}
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

              {/* Sidebar Box 3: CouponsCrew Banner Widget */}
              <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-3xl p-6 text-white shadow-md relative overflow-hidden space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-yellow-300" />
                </div>
                <h3 className="font-black text-lg text-white leading-snug">
                  Save Extra With Verified Coupon Codes
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Offset merchant cost changes by using verified deals on Amazon, Flipkart, Myntra, Nykaa &amp; more.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2">
                  <span>Explore Verified Stores</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

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
