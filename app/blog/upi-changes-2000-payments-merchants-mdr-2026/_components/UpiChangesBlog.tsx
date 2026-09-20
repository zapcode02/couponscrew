'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  Calendar,
  Clock,
  ShieldCheck,
  CreditCard,
  ArrowRight,
  HelpCircle,
  ShoppingBag,
  TrendingUp,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
  Building2,
  Percent,
  CheckCircle2,
  AlertTriangle,
  Info,
  Store,
  List
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/upi-changes-2000-payments-merchants-mdr-2026';
const PAGE_TITLE = 'UPI Is Changing: What ₹2,000+ Payments Mean for Merchants in 2026';

const RELATED_POSTS = [
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
    q: 'Will I be charged for paying through UPI as a customer?',
    a: 'No. Consumer-side UPI payments remain free for any amount. The MDR applies within the merchant payment ecosystem and is not passed on to the person making the payment.',
  },
  {
    q: 'Does this affect UPI transfers I make to friends or family?',
    a: 'No. Person-to-Person (P2P) UPI transfers are completely outside this framework and stay free regardless of the amount transferred.',
  },
  {
    q: 'My kirana store does less than ₹1 lakh in UPI sales per month — do I need to do anything?',
    a: 'Likely not. Small merchants under the ₹1 lakh monthly UPI QR threshold are exempt. But confirm your classification with your payment service provider before October 15 to be sure.',
  },
  {
    q: 'What if a merchant adds a digital payment charge on my bill?',
    a: 'That is not permitted under the current framework. Merchants are prohibited from directly surcharging customers for MDR. If you encounter this, you can report it to your bank or the NPCI grievance portal.',
  },
  {
    q: 'Does this affect UPI AutoPay for subscriptions or SIPs?',
    a: 'No. UPI AutoPay for recurring payments remains free from MDR under the revised framework.',
  },
];

export default function UpiChangesBlog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">UPI ₹2,000+ Payment Changes 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Header */}
              <div className="space-y-4">
                <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Fintech &amp; Merchant Guides
                </span>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  UPI Is Changing: ₹2,000+ Payments Raise New Concerns for Merchants
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Sep 20, 2026</span>
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

              {/* Banner Image */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1789908955/upi-changes-2000-payments-merchants-mdr-2026_cwjqa7.webp"
                  alt="UPI Is Changing: What ₹2,000+ Payments Mean for Merchants in 2026"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-sm font-bold bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
                    <Info size={14} className="text-amber-300" />
                    Effective Date: October 15, 2026 • Gazette Notification S.O. 5067(E)
                  </span>
                </div>
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  Starting October 15, 2026, eligible UPI payments made at merchants above ₹2,000 will carry a 0.4% Merchant Discount Rate (MDR). Consumers pay nothing extra — but the change has shaken small retailers, kirana owners, and online sellers who have depended on zero-cost UPI acceptance since 2020. Here is a plain-language breakdown of what changed, who it actually affects, and what you should do before the deadline.
                </p>
              </div>

              {/* Table of Contents Card (ISSUE 1 FIXED) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <List className="w-5 h-5" />
                  <h3 className="text-lg sm:text-xl font-black text-[#1A1A2E]">Table of Contents</h3>
                </div>
                <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-semibold">
                  {[
                    { title: "1. What Is MDR, and Why Is It Coming Back?", href: "#what-is-mdr" },
                    { title: "2. Who Pays, Who Does Not?", href: "#who-pays" },
                    { title: "3. The Numbers: How Much Does 0.4% Cost?", href: "#the-numbers" },
                    { title: "4. Which Sectors Get Different MDR Rates?", href: "#sector-rates" },
                    { title: "5. Why Small Retailers Are Worried Anyway", href: "#small-retailers-worried" },
                    { title: "6. The RuPay Connection", href: "#rupay-connection" },
                    { title: "7. What Should Merchants Do Before Oct 15?", href: "#what-merchants-should-do" },
                    { title: "8. Will Consumers Eventually Pay?", href: "#will-consumers-pay" },
                    { title: "9. Frequently Asked Questions (FAQ)", href: "#faq" },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="p-3 bg-[#F8F8FF] hover:bg-[#F0EEFF] text-[#1A1A2E] hover:text-[#5B4FBE] rounded-xl border border-[#E8E8F0] transition-all flex items-center justify-between group"
                    >
                      <span className="truncate">{item.title}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* ARTICLE SECTION 1: What Is MDR? */}
              <section id="what-is-mdr" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Percent className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    What Is MDR, and Why Is It Coming Back to UPI?
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  MDR — Merchant Discount Rate — is the fee a payment ecosystem charges to process a transaction. Banks, payment aggregators, and app providers share it. In India, MDR on UPI was effectively zeroed out in January 2020 through a government mandate, with a subsidy covering the gap. That zero-MDR window is now partially closing.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  On September 14, 2026, the Finance Ministry's Department of Financial Services issued Gazette Notification S.O. 5067(E) under Section 10A of the Payment and Settlement Systems Act, 2007. It formally protects UPI transactions up to ₹2,000 from any charge — and that explicit cap opened the door for NPCI to announce MDR on larger transactions.
                </p>

                <div className="p-4 bg-[#F0EEFF] border border-[#5B4FBE]/20 rounded-2xl flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#5B4FBE] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#5B4FBE] font-medium leading-relaxed">
                    NPCI's stated reason is sustainability. Over the last decade, UPI grew from 1.78 crore transactions in FY2016–17 to over 24,000 crore in FY2025–26. That volume requires banks, acquiring processors, and app platforms to invest continuously in infrastructure, fraud prevention, and server capacity — all without a revenue model. MDR is meant to fix that.
                  </p>
                </div>
              </section>

              {/* ARTICLE SECTION 2: Who Pays, Who Does Not? */}
              <section id="who-pays" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#FF5722]">
                  <ShieldCheck className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Who Pays, Who Does Not?
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  This is where most of the confusion sits. The short answer: <strong className="text-[#1A1A2E]">merchants pay, consumers do not.</strong>
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">Under the revised framework:</p>

                <div className="space-y-3 pt-1">
                  {[
                    { label: 'Consumers', desc: 'making a UPI payment of any amount pay zero additional fee. Nothing changes when you scan a QR code.' },
                    { label: 'Person-to-Person (P2P) transfers', desc: '— sending money to a friend, family member, or splitting a bill — remain completely free regardless of the amount.' },
                    { label: 'Merchant payments up to ₹2,000', desc: 'remain outside the MDR structure.' },
                    { label: 'Small merchants', desc: 'processing under ₹1 lakh per month via UPI QR are protected and exempt.' },
                    { label: 'Eligible P2M transactions above ₹2,000', desc: 'at larger, specified merchants attract 0.4% MDR, borne within the payment ecosystem.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                      <p className="text-sm text-[#4A4A6A]">
                        <strong className="text-[#1A1A2E]">{item.label}</strong> {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-[#4A4A6A] leading-relaxed pt-2">
                  The government has explicitly said merchants cannot surcharge customers for this cost. But the real concern — and it is a legitimate one — is that some merchants will pass it on indirectly, either by adding small charges on digital payments or by steering customers back toward cash for higher-value bills.
                </p>
              </section>

              {/* ARTICLE SECTION 3: The Numbers (Table) */}
              <section id="the-numbers" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-5">
                <div className="flex items-center gap-2.5 text-[#22C55E]">
                  <TrendingUp className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    The Numbers: How Much Does 0.4% Actually Cost a Merchant?
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The MDR is simple arithmetic, but worth spelling out for businesses doing their planning:
                </p>

                {/* Formatted Table */}
                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0]">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Transaction Value</th>
                        <th className="p-4 sm:px-6">MDR at 0.4%</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      {[
                        { val: '₹2,500', mdr: '₹10' },
                        { val: '₹5,000', mdr: '₹20' },
                        { val: '₹10,000', mdr: '₹40' },
                        { val: '₹25,000', mdr: '₹100' },
                        { val: '₹50,000', mdr: '₹200' },
                        { val: '₹75,000 and above', mdr: '₹300 (capped)' },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8F8FF]'}>
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">{row.val}</td>
                          <td className="p-4 sm:px-6 font-bold text-[#FF5722]">{row.mdr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  For transactions of ₹75,000 or more, the MDR does not keep climbing — it is capped at ₹300. So the maximum a merchant pays on a single eligible UPI transaction is ₹300, regardless of whether the payment is ₹75,000 or ₹5 lakh.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  For a kirana or mid-size retailer doing ₹1 lakh in eligible UPI sales per month above the ₹2,000 threshold, the monthly MDR cost works out to ₹400. That sounds modest in isolation. But for a shop running on 5–8% margins, ₹400 per lakh is a real line item — and the Retailers Association of India (RAI) has already flagged that this timing, just ahead of the festive season, puts additional pressure on businesses that count on high-volume October and November sales.
                </p>
              </section>

              {/* ARTICLE SECTION 4: Which Sectors Get Different MDR Rates? */}
              <section id="sector-rates" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Store className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Which Sectors Get Different MDR Rates?
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Not all merchant categories fall under the flat 0.4%. NPCI has set specific structures for certain sectors:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-1.5">
                    <h3 className="font-bold text-[#1A1A2E] text-base">Essential and Public Services</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      Railways, telecom services, insurance premiums, and fuel attract a flat ₹5 per transaction — not a percentage. This keeps everyday essential payments extremely low-cost for merchants in those categories.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-1.5">
                    <h3 className="font-bold text-[#1A1A2E] text-base">Capital Markets</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      UPI payments toward mutual funds, securities, stockbrokers, and dealers carry an MDR of 0.02%, capped at ₹300 per transaction. If you're running an investment platform and your users pay via UPI, this is the rate that applies. If you shop on platforms like <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">Amazon</Link> or <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">Flipkart</Link> and redeem cashback or invest via those apps, transactions classified under capital markets follow this lower structure.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-1.5">
                    <h3 className="font-bold text-[#1A1A2E] text-base">UPI AutoPay</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      Recurring payment mandates — SIPs, subscriptions, EMIs set up via UPI AutoPay — are exempt from MDR entirely. These remain free.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0] space-y-1.5">
                    <h3 className="font-bold text-[#1A1A2E] text-base">Small merchants (under ₹1 lakh/month via UPI QR)</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      Exempt. The policy is deliberately targeted at larger commercial entities, not the neighbourhood tea stall or vegetable vendor.
                    </p>
                  </div>
                </div>
              </section>

              {/* ARTICLE SECTION 5: Why Small Retailers Are Worried */}
              <section id="small-retailers-worried" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#FF5722]">
                  <AlertTriangle className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Why Small Retailers Are Worried Anyway
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The math above might suggest small shops have nothing to worry about. But several practical concerns have emerged since the notification.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  First, merchant classification is not always straightforward. A mid-size electronics shop, a large grocery chain, or an apparel retailer with significant monthly volumes may fall into the &quot;eligible&quot; category even if their per-transaction amounts are modest. Business owners need to check with their payment service provider how they are classified before October 15.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Second, there is a secondary effect on supply chains. When a retailer orders inventory from a distributor via UPI for amounts above ₹2,000 — which is routine in B2B trade — that transaction may attract MDR too. The cost accumulates across the chain.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Third, and most visibly: some merchants are already putting up notices at their counters, asking customers to pay in cash for amounts above ₹2,000. A photograph of such a sign at a grocery store in Delhi went viral in mid-September 2026, sparking the broader debate about whether UPI's run as a frictionless payment system is ending.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  For shoppers who rely on UPI while buying clothing on <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">Myntra</Link>, booking movie tickets on <Link href="/stores/bookmyshow-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">BookMyShow</Link>, or paying for groceries via <Link href="/stores/blinkit-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">Blinkit</Link> or <Link href="/stores/zepto-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">Zepto</Link>, the direct consumer experience should not change — these platforms absorb processing costs within their business models. It is offline retail and mid-size physical merchants where friction is most likely to appear.
                </p>
              </section>

              {/* ARTICLE SECTION 6: The RuPay Connection */}
              <section id="rupay-connection" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <CreditCard className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    The RuPay Connection
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The same gazette notification that triggered the UPI discussion also explicitly protects RuPay debit card transactions from any direct or indirect charge on the person making the payment. This matters because RuPay credit cards linked to UPI follow a different rate structure under existing card MDR rules — not the new 0.4% UPI framework. If you're linking a RuPay credit card to GPay or PhonePe, the applicable MDR is the card network's rate, not UPI's.
                </p>
              </section>

              {/* ARTICLE SECTION 7: What Should Merchants Do? */}
              <section id="what-merchants-should-do" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#22C55E]">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    What Should Merchants Do Before October 15?
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The deadline is close, and the practical steps are not complicated but they do need to happen:
                </p>

                <div className="space-y-4 pt-1">
                  <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block mb-1">Check your merchant classification.</strong>
                    <p className="text-sm text-[#4A4A6A]">Call your acquiring bank or payment aggregator and ask whether you fall under the eligible P2M category for the new MDR. Small merchants processing under ₹1 lakh per month via UPI QR may find they are exempt and have no action required.</p>
                  </div>

                  <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block mb-1">Update your accounting.</strong>
                    <p className="text-sm text-[#4A4A6A]">MDR is a deductible business expense. For GST-registered merchants, the 18% GST on MDR is creditable as input tax — meaning you can set it off against your GST liability. A ₹40 MDR on a ₹10,000 transaction carries ₹7.20 GST, which is recoverable. Factor this into your pricing and bookkeeping before the month turns.</p>
                  </div>

                  <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block mb-1">Do not surcharge customers.</strong>
                    <p className="text-sm text-[#4A4A6A]">The framework explicitly prohibits passing MDR directly onto customers as a separate line item. Restructure pricing if needed, but a visible &quot;digital payment surcharge&quot; on bills is not permitted.</p>
                  </div>

                  <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block mb-1">Talk to your distributor.</strong>
                    <p className="text-sm text-[#4A4A6A]">If your supply-side purchases above ₹2,000 happen via UPI, discuss with your distributor whether they plan to move those transactions to NEFT, RTGS, or another channel to avoid the MDR on B2B payments.</p>
                  </div>

                  <div className="p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block mb-1">Watch for updates.</strong>
                    <p className="text-sm text-[#4A4A6A]">NPCI has a track record of revising frameworks after implementation. The ₹1 lakh small-merchant threshold and the caps on essential sectors already show the policy has flexibility built in. Staying informed through your bank or payment provider in October will matter more than acting on today's snapshot.</p>
                  </div>
                </div>

                <div className="p-4 bg-[#F0FDF4] border border-[#22C55E]/20 rounded-2xl flex items-start gap-3 mt-4">
                  <ShoppingBag className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#2E7D32] leading-relaxed">
                    For consumers, the best practical strategy for now is simple: look for platforms and stores that offer cashback or discount codes to offset any indirect cost increases. Sites like <Link href="/" className="font-bold underline">CouponsCrew</Link> track the latest offers from major merchants — including <Link href="/stores/jiomart-coupon-code" className="font-bold underline">JioMart</Link>, <Link href="/stores/nykaa-coupon-code" className="font-bold underline">Nykaa</Link>, and <Link href="/stores/lenskart-coupon-code" className="font-bold underline">Lenskart</Link> — so any savings that surface through offers or promotional pricing are easy to find.
                  </p>
                </div>
              </section>

              {/* ARTICLE SECTION 8: Will Consumers Eventually Pay? */}
              <section id="will-consumers-pay" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <HelpCircle className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Will Consumers Eventually Pay?
                  </h2>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The government's current position is unambiguous: UPI stays free for consumers, and there is no plan to introduce consumer-facing UPI fees. Senior officials have publicly said there is &quot;no question&quot; of rolling back the October 15 framework, and that MDR is the mechanism that makes UPI financially self-sustaining for the long run.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  That said, the practical reality of merchant economics means that some price adjustments are inevitable. A retailer absorbing ₹400/month in MDR on ₹1 lakh of eligible sales will eventually factor that into operating costs — either through pricing, reduced discounts, or a preference for cash. The impact will be uneven, with digital-native platforms and large retailers better positioned to absorb it than offline mid-size merchants.
                </p>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The festive season running through October and November 2026 will be the real test. High-value purchases — electronics, appliances, furniture — where UPI payments frequently cross ₹2,000 are the category to watch. If merchants in those segments shift toward encouraging card payments or cash for big-ticket items, the consumer experience of UPI starts to feel different even without a direct fee.
                </p>
              </section>

              {/* ARTICLE SECTION 9: FAQ */}
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
                <h3 className="text-xl font-extrabold text-white">Summary &amp; Key Takeaway</h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  The change is real, but it is targeted. For most consumers using UPI daily for groceries, rides, or food orders, October 15 will pass without any visible difference. For merchants — especially those in the middle tier, running retail shops or service businesses with regular high-value transactions — the next few weeks are the time to understand where they stand, update their books, and make sure they are not caught off-guard when the MDR framework kicks in.
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

              <section className="py-12 sm:py-16 border-t border-[#E8E8F0] mt-12">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        slug: 'bigg-boss-season-20-where-to-watch-deals',
                        title: 'Bigg Boss Season 20 (2026): Where to Watch, Price & Best Deals',
                        category: 'ENTERTAINMENT GUIDES',
                        image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789314709/bigg-boss-season-20-where-to-watch-deals_ggtlzz.webp',
                        date: 'Sep 6, 2026',
                        readTime: '7 min read',
                        excerpt: "Bigg Boss 20 is streaming on JioHotstar from September 6, 2026. Here's where to watch, what it costs, confirmed contestants, and the best deals.",
                      },
                      {
                        slug: 'raksha-bandhan-gift-ideas',
                        title: '10 Best Raksha Bandhan Gift Ideas 2026 — Discount Codes to Save More',
                        category: 'FESTIVE GUIDES',
                        image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787588384/raksha-bandhan-gift-ideas_z16zzz.webp',
                        date: 'Aug 24, 2026',
                        readTime: '8 min read',
                        excerpt: 'Discover thoughtful and trending Raksha Bandhan gift ideas for brothers and sisters, and learn how to stack coupons, bank offers, and cashback to save extra on every gift.',
                      },
                    ].map((blog) => (
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

                  {/* View All Blogs Button */}
                  <div className="flex justify-center pt-4">
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#5B4FBE] text-[#5B4FBE] font-extrabold text-sm sm:text-base bg-white hover:bg-purple-50 transition-all shadow-xs"
                    >
                      <span>View All Blogs</span>
                      <ArrowRight className="w-4 h-4 text-[#5B4FBE]" />
                    </Link>
                  </div>
                </div>
              </section>

            </article>

            {/* SIDEBAR WIDGETS */}
            <aside className="lg:col-span-4 space-y-6">

              {/* Sidebar Box 1: Key Highlights Widget */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#E8E8F0]">
                  <ShieldCheck className="w-5 h-5 text-[#5B4FBE]" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Key Policy Highlights</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Deadline</strong>
                    <span className="text-gray-600">October 15, 2026</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Threshold</strong>
                    <span className="text-gray-600">Transactions above ₹2,000</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Applicable MDR</strong>
                    <span className="text-gray-600">0.4% (Capped at ₹300)</span>
                  </div>
                  <div className="p-3 bg-[#F0FDF4] rounded-xl border border-[#22C55E]/30">
                    <strong className="text-[#2E7D32] block">Consumers</strong>
                    <span className="text-[#2E7D32]">100% Free — Zero Surcharge</span>
                  </div>
                </div>
              </div>

              {/* Table of Contents Widget (Placed in sidebar before Related Guides) */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-[#E8E8F0] text-[#5B4FBE]">
                  <List className="w-5 h-5 shrink-0" />
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Table of Contents</h3>
                </div>
                <nav className="space-y-2 text-xs font-semibold">
                  {[
                    { title: "1. What Is MDR, and Why Is It Coming Back?", href: "#what-is-mdr" },
                    { title: "2. Who Pays, Who Does Not?", href: "#who-pays" },
                    { title: "3. The Numbers: How Much Does 0.4% Cost?", href: "#the-numbers" },
                    { title: "4. Which Sectors Get Different MDR Rates?", href: "#sector-rates" },
                    { title: "5. Why Small Retailers Are Worried Anyway", href: "#small-retailers-worried" },
                    { title: "6. The RuPay Connection", href: "#rupay-connection" },
                    { title: "7. What Should Merchants Do Before Oct 15?", href: "#what-merchants-should-do" },
                    { title: "8. Will Consumers Eventually Pay?", href: "#will-consumers-pay" },
                    { title: "9. Frequently Asked Questions (FAQ)", href: "#faq" },
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
                <Link
                  href="/stores"
                  className="inline-flex items-center gap-1.5 bg-white text-[#5B4FBE] font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs hover:bg-yellow-300 hover:text-gray-900 transition-all"
                >
                  <span>Explore Verified Stores</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </aside>

          </div>

        </div>



      </main>

      <Footer />
    </div>
  );
}
