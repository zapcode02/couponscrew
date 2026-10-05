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
  AlertTriangle,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/no-cost-emi-real-cost-sale-2026';
const PAGE_TITLE = 'No Cost EMI in the Sale: What It Actually Costs and How to Check';

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
    slug: 'buy-phone-now-or-wait-for-sale-2026',
    title: 'Buy Your Phone Now or Wait for the Sale? Smartphones to Watch in October 2026',
    category: 'Electronics',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1791102378/Buy_Now_or_Wait_for_the_Sale_wbznsq.webp',
    date: 'Oct 4, 2026',
    readTime: '9 min read',
    excerpt: 'Phone prices in India rose through 2026. When to buy, which phones Flipkart has teased for Big Billion Days, and how to work out the real sale price.',
  },
];

const FAQS = [
  {
    q: 'Is No Cost EMI really free?',
    a: 'No Cost EMI is not completely free. The seller covers the interest through an upfront discount, but you usually pay 18% GST on that interest and sometimes a processing fee. On a ₹60,000 purchase over six months, this can add up to around ₹700, depending on your bank.',
  },
  {
    q: 'Why do I pay GST on No Cost EMI?',
    a: "You pay GST because the bank still charges interest on the EMI loan, and GST at 18% applies to that interest. The seller's discount covers the interest itself, but not the GST on it.",
  },
  {
    q: 'Does the bank instant discount apply on No Cost EMI?',
    a: 'It depends on the offer. For Amazon Great Indian Festival 2026, Amazon has said the 10% SBI card discount applies to EMI transactions as well. Other offers may have a different cap or minimum order for EMI, so compare the full-payment and EMI totals on the payment page.',
  },
  {
    q: 'Does No Cost EMI affect my credit score?',
    a: 'No Cost EMI can affect your credit score. The full purchase amount is blocked on your credit card, which raises your credit utilisation. Paying every instalment on time helps your score, and missing one can lower it.',
  },
  {
    q: 'Can I cancel or prepay a No Cost EMI?',
    a: 'You can usually prepay or cancel, but there may be a foreclosure fee and you may lose the No Cost benefit on the remaining instalments. If you return the product, contact your bank to close the EMI, because the processing fee is often not refunded.',
  },
];

export default function NoCostEmiRealCost2026Blog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">No Cost EMI in the Sale</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Header */}
              <div className="space-y-4">
                <span className="inline-block bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Finance
                </span>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  No Cost EMI in the Sale: What It Actually Costs and How to Check
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Oct 5, 2026</span>
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
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1791215474/No_Cost_EMI__What_You_Still_Pay_iuhik8.webp"
                  alt="No Cost EMI in the Sale: What It Actually Costs and How to Check"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  <strong>No Cost EMI usually costs a little, not nothing.</strong> The interest is real, but the seller covers it with an upfront discount. What you still pay is 18% GST on that interest, any processing fee your bank charges, and sometimes a bank discount you would have got by paying in full. On a ₹60,000 phone over six months, that can add up to around ₹700.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed italic">
                  Last updated: 5 October 2026. Amazon Great Indian Festival starts on 8 October and Flipkart Big Billion Days on 9 October.
                </p>
              </div>

              {/* SECTION 1: How No Cost EMI works */}
              <section id="how-it-works" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  How No Cost EMI actually works
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  No Cost EMI is a normal EMI loan where the seller pays the interest for you. Your bank still charges interest on the purchase. The seller, or the brand, gives you a discount equal to that interest, so your monthly instalments add up to the product&apos;s price.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">Here is what happens at checkout, step by step:</p>
                <ol className="list-decimal pl-5 text-[#4A4A6A] space-y-2">
                  <li>You pick a product priced at, say, ₹60,000 and choose 6-month No Cost EMI.</li>
                  <li>The seller gives an instant discount equal to the interest the bank will charge over six months.</li>
                  <li>Your card is charged the discounted amount, and the bank converts it into an EMI loan.</li>
                  <li>The bank adds interest to that loan. Your six instalments come to ₹60,000 in total.</li>
                  <li>The bank also charges 18% GST on the interest, and in many cases a one-time processing fee. These are not covered by the discount.</li>
                </ol>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The Reserve Bank of India made its position on &quot;zero per cent&quot; loans clear in a September 2013 circular to banks, saying that &quot;zero per cent interest is non-existent&quot;. That is why banks still calculate interest on No Cost EMI purchases. The &quot;no cost&quot; part is the seller&apos;s discount, not the absence of interest.
                </p>
              </section>

              {/* SECTION 2: Worked example */}
              <section id="worked-example" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Worked example: a ₹60,000 phone on No Cost EMI
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The numbers below use two assumptions so you can see the mechanics: an annual interest rate of 15% and a processing fee of ₹199 plus GST. Your bank&apos;s actual rate and fee may be different; check them on the payment page before you confirm.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Tenure</th>
                        <th className="p-4 sm:px-6">Monthly EMI</th>
                        <th className="p-4 sm:px-6">Seller discount (equal to interest)</th>
                        <th className="p-4 sm:px-6">GST on interest</th>
                        <th className="p-4 sm:px-6">Processing fee with GST</th>
                        <th className="p-4 sm:px-6">Extra you pay</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">3 months</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹20,000</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹1,469</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹264</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹235</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">about ₹500</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">6 months</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹10,000</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹2,540</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹457</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹235</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">about ₹690</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">12 months</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹5,000</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹4,603</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹829</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">₹235</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">about ₹1,060</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Two things stand out. First, the extra cost grows with the tenure, because a longer loan means more interest and more GST on it. Second, the extra cost is small compared with the price, roughly 1% to 2% here. No Cost EMI is not a trap; it simply is not free.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  If your bank charges no processing fee for that offer, the extra cost drops to the GST alone. Some sale offers waive the fee, so check before you choose.
                </p>
              </section>

              {/* SECTION 3: The bigger cost */}
              <section id="bigger-cost" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  The bigger cost: the discount you might lose
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  In festive sales, the larger cost of EMI is often not the GST. It is the difference between the bank offer for full payment and the bank offer for EMI.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Bank instant discounts in big sales sometimes come with different terms for EMI. The percentage may be the same, but the cap or the minimum order can differ, and some offers apply only to full payment. This year, Amazon has said its 10% SBI card discount covers EMI transactions as well as full payments. Flipkart has listed Axis Bank and ICICI Bank card offers. In both cases, the exact caps and EMI terms appear on the product page during the sale.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">Before you choose EMI, compare two numbers on the payment page:</p>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>Final price if you pay in full</strong>, after the bank discount.</li>
                  <li><strong>Total of all EMIs plus processing fee and GST</strong>, after the bank discount for EMI.</li>
                </ul>
                <p className="text-[#4A4A6A] leading-relaxed">
                  If the full-payment option is cheaper by more than a few hundred rupees and you can afford it, EMI is costing you money. If the two are close, EMI is mainly a way to spread the payment, which can be worth it.
                </p>
              </section>

              {/* SECTION 4: Other costs to check */}
              <section id="other-costs" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Other costs to check before choosing EMI
                </h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Your credit limit gets blocked</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    When you convert a purchase into EMI, the full amount is blocked on your card. It is released bit by bit as you pay each instalment. On a card with a ₹1 lakh limit, a ₹60,000 EMI purchase leaves you about ₹40,000 for everything else that month. If you plan to buy more in the same sale, check your available limit first.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Credit utilisation and your credit score</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    A large blocked amount raises your credit utilisation, the share of your limit you are using. High utilisation can lower your credit score for a while. Paying every instalment on time helps your score; a missed instalment hurts it and may cancel the No Cost benefit.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Closing the EMI early</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    If you pay off the EMI before the tenure ends, many card issuers charge a foreclosure fee, often a small percentage of the outstanding amount. You may also lose the No Cost benefit on the remaining months. Read the foreclosure terms if you think you might close early.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Returns and cancellations</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    If you return a product bought on EMI, the refund goes to your card, but the EMI conversion may not reverse cleanly. You may need to contact your bank to close the EMI, and the processing fee is often not refunded. Keep the order and EMI reference numbers until the return is complete.
                  </p>
                </div>
              </section>

              {/* SECTION 5: EMI options this year */}
              <section id="emi-options" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  EMI options you will see in this year&apos;s sales
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Option</th>
                        <th className="p-4 sm:px-6">How it works</th>
                        <th className="p-4 sm:px-6">What to check</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Credit card No Cost EMI</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Seller covers the interest; bank converts the purchase into EMI</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">GST on interest, processing fee, tenure options</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Credit card standard EMI</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">You pay the interest yourself</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Interest rate; often higher than you expect</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Debit card EMI</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Available to pre-approved customers of some banks</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Eligibility shows only at checkout; similar fees apply</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Cardless EMI and pay later</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">The platform or its lending partner gives you a credit line</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Interest, late fees and whether the bank offer still applies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  On Amazon, No Cost EMI on eligible products has been reported to start from around ₹99 a day during the Great Indian Festival. Amazon also runs Amazon Pay Later. On Flipkart, the sale lists Flipkart EMI, Pay Later options and Super.money cashback. All of these have their own terms, so compare the final amount rather than the monthly figure.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  For the full bank offer details of each sale, see our <Link href="/blog/amazon-great-indian-festival-2026-upcoming-sales" className="text-[#5B4FBE] font-semibold hover:underline">Amazon Great Indian Festival 2026 guide</Link>, our <Link href="/blog/big-billion-days-2026-flipkart-upcoming-sales" className="text-[#5B4FBE] font-semibold hover:underline">Big Billion Days 2026 guide</Link> and the side-by-side <Link href="/blog/big-billion-days-vs-amazon-great-indian-festival" className="text-[#5B4FBE] font-semibold hover:underline">comparison of the two sales</Link>.
                </p>
              </section>

              {/* SECTION 6: When it makes sense */}
              <section id="when-it-makes-sense" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  When No Cost EMI makes sense, and when it does not
                </h2>

                <p className="text-[#4A4A6A] leading-relaxed font-bold text-[#1A1A2E]">It can make sense when:</p>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li>You would otherwise drain your savings or emergency fund to pay in full.</li>
                  <li>The full-payment price and the EMI total are within a few hundred rupees of each other.</li>
                  <li>The tenure is short and you are confident of paying every instalment on time.</li>
                  <li>The bank waives the processing fee for the sale.</li>
                </ul>

                <p className="text-[#4A4A6A] leading-relaxed font-bold text-[#1A1A2E] pt-2">It is usually not worth it when:</p>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li>You lose a bigger bank discount by choosing EMI over full payment.</li>
                  <li>The EMI would push your card close to its limit for months.</li>
                  <li>You are buying several things on EMI at once, and the combined monthly amount strains your budget.</li>
                  <li>You are using EMI to buy something you would not buy if you had to pay in full.</li>
                </ul>
              </section>

              {/* SECTION 7: Quick checklist */}
              <section id="quick-checklist" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Quick checklist on the payment page
                </h2>
                <ol className="list-decimal pl-5 text-[#4A4A6A] space-y-2">
                  <li>Note the final price for full payment, after the bank discount.</li>
                  <li>Select No Cost EMI and note the monthly amount and tenure.</li>
                  <li>Look for the processing fee and the interest line in the EMI breakdown.</li>
                  <li>Add GST on interest (18% of the interest shown) and the fee to the EMI total.</li>
                  <li>Compare the two totals. Choose the lower one if you can afford it.</li>
                  <li>Check your available credit limit after the EMI amount is blocked.</li>
                </ol>
                <p className="text-[#4A4A6A] leading-relaxed">
                  If the payment page does not show the interest or fee clearly, check your bank&apos;s EMI terms or the SMS and statement your bank sends after conversion, which list these charges.
                </p>
              </section>

              {/* SECTION 8: Before the sale starts */}
              <section id="before-sale" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Before the sale starts
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Amazon&apos;s sale opens on 8 October and Flipkart&apos;s on 9 October, so there is time to check your card&apos;s EMI terms now. Log in to your bank&apos;s app, look up the processing fee for EMI conversions, and note your available limit. If you are buying a phone, our guide on whether to <Link href="/blog/buy-phone-now-or-wait-for-sale-2026" className="text-[#5B4FBE] font-semibold hover:underline">buy a phone now or wait for the sale</Link> explains how to work out the real sale price, including bank offers. The full list of sale dates is in our <Link href="/blog/october-2026-sale-calendar-india" className="text-[#5B4FBE] font-semibold hover:underline">October 2026 sale calendar</Link>.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Coupon codes can lower the price before the EMI is calculated, which also lowers the interest and GST. Check the <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon code</Link> and <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Flipkart coupon code</Link> pages before checking out. For more ways to reduce the final bill, see our guide on <Link href="/blog/how-to-save-money-shopping-online-india" className="text-[#5B4FBE] font-semibold hover:underline">how to save money shopping online in India</Link>.
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

              {/* Disclaimer — always visible, not collapsible (YMYL compliance requirement) */}
              <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 leading-relaxed">
                  <strong>Disclaimer:</strong> This article explains how No Cost EMI generally works in India and uses illustrative numbers. It is not financial advice. Interest rates, fees and offer terms vary by bank, card and seller, and can change during a sale. Check the terms shown on the payment page and by your bank before converting a purchase into EMI.
                </p>
              </div>

              {/* Conclusion Block */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-6 sm:p-8 text-white space-y-4">
                <h3 className="text-xl font-extrabold text-white">Summary</h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  No Cost EMI is a reasonable tool when it saves you from emptying your savings and costs only a few hundred rupees in GST and fees. It stops being a good deal when it costs you a bigger bank discount, or when the monthly amount makes it easy to spend more than you planned. Two minutes on the payment page comparing the totals is enough to know which one you are looking at.
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
                    <strong className="text-[#1A1A2E] block">GST on EMI Interest</strong>
                    <span className="text-gray-600">18%, not covered by seller discount</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Example Extra Cost</strong>
                    <span className="text-gray-600">~₹500–₹1,060 on a ₹60,000 phone</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Amazon SBI Discount</strong>
                    <span className="text-gray-600">10%, applies to EMI too</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">RBI Position</strong>
                    <span className="text-gray-600">&quot;Zero per cent interest is non-existent&quot; (2013 circular)</span>
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
                    { title: 'How No Cost EMI Works', href: '#how-it-works' },
                    { title: 'Worked Example', href: '#worked-example' },
                    { title: 'The Bigger Cost', href: '#bigger-cost' },
                    { title: 'Other Costs to Check', href: '#other-costs' },
                    { title: 'EMI Options This Year', href: '#emi-options' },
                    { title: 'When It Makes Sense', href: '#when-it-makes-sense' },
                    { title: 'Quick Checklist', href: '#quick-checklist' },
                    { title: 'Before the Sale Starts', href: '#before-sale' },
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
