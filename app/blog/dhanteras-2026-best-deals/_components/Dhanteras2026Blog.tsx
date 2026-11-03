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
  Coins,
  Smartphone,
  Home as HomeIcon,
  Gift,
  Zap,
  AlertTriangle,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/dhanteras-2026-best-deals';
const PAGE_TITLE = 'Dhanteras 2026: Best Deals on Gold, Electronics & Home Appliances';

const RELATED_POSTS = [
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
  {
    slug: 'dussehra-shopping-guide-what-to-buy-where-to-save-2026',
    title: 'Dussehra Shopping Guide 2026: What to Buy & Where to Save',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1791376864/dussehra-shopping-guide-what-to-buy-where-to-save-2026_wz1dvb.webp',
    date: 'Oct 15, 2026',
    readTime: '8 min read',
    excerpt: 'Dussehra falls on October 20 — festive shopping breakdown across ethnic wear, home decor, pooja essentials, and gifts.',
  },
];

const FAQS = [
  {
    q: 'When is Dhanteras 2026?',
    a: 'Dhanteras 2026 is on Friday, 6 November. It marks the first day of the five-day Diwali celebration and is considered the most auspicious day to make new purchases.',
  },
  {
    q: 'What should you buy on Dhanteras 2026?',
    a: 'Gold, silver, metal utensils, electronics, home appliances, and cookware are all considered auspicious purchases on Dhanteras. The tradition emphasises bringing something new and valuable into the home — the item and the amount are secondary to the act of buying.',
  },
  {
    q: 'Is it okay to buy electronics instead of gold on Dhanteras?',
    a: 'Yes — electronics and home appliances are now fully accepted as Dhanteras purchases. The tradition focuses on bringing prosperity and something new into the home, not on the specific item. Around the majority of Indian households now include electronics as part of their Dhanteras shopping.',
  },
  {
    q: 'Where are the best deals for Dhanteras 2026?',
    a: 'Amazon and Flipkart run dedicated Dhanteras and Diwali sales with bank cashback offers, EMI deals, and exchange bonuses. Check active coupon codes on CouponsCrew before checkout to ensure you’re getting the best available deal.',
  },
  {
    q: 'What is the Dhanteras 2026 puja time?',
    a: 'The pradosh period — after sunset on Friday, 6 November — is the most auspicious time for Dhanteras puja. The evening window, roughly from 5:30 PM to 7:30 PM, is traditionally considered the best time for Lakshmi and Kubera puja.',
  },
  {
    q: 'Can I buy clothes or jewellery on Dhanteras?',
    a: 'Fashion jewellery, silver jewellery, and metal accessories are excellent Dhanteras purchases. Clothing on its own is less traditional on Dhanteras specifically — that is more of a Diwali and Bhai Dooj category. For jewellery and accessories, check Myntra coupon codes and Amazon coupon codes.',
  },
];

export default function Dhanteras2026Blog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">Dhanteras 2026: Best Deals</span>
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
                  Dhanteras 2026: Best Deals on Gold, Electronics & Home Appliances
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Nov 3, 2026</span>
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
              <div className="relative w-full h-64 sm:h-130 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1793721685/Dhanteras_2026_Gold_and_Gadget_Deals_aansol.webp"
                  alt="Dhanteras 2026: Best Deals on Gold, Electronics & Home Appliances"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-lg sm:text-xl font-extrabold text-[#1A1A2E]">
                  One day a year, buying is not just allowed — it is blessed.
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Every other day of the year, spending money comes with guilt. A small voice that says <em>&quot;do you really need this?&quot;</em>
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Not on Dhanteras.
                </p>
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  On <strong>Friday, 6 November 2026</strong>, that voice goes completely quiet. Because Dhanteras — the first day of the five-day Diwali celebration — is the one day in the Indian calendar when bringing something new home is not just a purchase. It is an invitation to Goddess Lakshmi.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Gold, silver, electronics, home appliances, cookware, vehicles — all of it counts. All of it is considered auspicious. And every major platform in India knows this, which is why Dhanteras is also one of the biggest sale days of the year.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  So. What do you buy? And where do you find the best deal?
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  That is exactly what this guide is for.
                </p>
              </div>

              {/* SECTION: Quick Facts */}
              <section id="quick-facts" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Calendar className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Dhanteras 2026 — Quick Facts
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
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Friday, 6 November 2026</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Puja Muhurat</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Evening, after sunset — pradosh period</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Festival Position</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Day 1 of the 5-day Diwali celebration</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Deities Honoured</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Goddess Lakshmi, Lord Kubera, Lord Dhanvantari</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Most Auspicious Purchases</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Gold, Silver, Metal Utensils, Electronics, Appliances</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION: Gold & Silver */}
              <section id="gold-silver" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Coins className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Gold & Silver — The Classic Dhanteras Buy
                  </h2>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] italic">
                  &quot;It&apos;s not spending. It&apos;s inviting prosperity home.&quot;
                </h3>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Buying gold or silver on Dhanteras is the oldest tradition in the book. The belief: gold and silver are Goddess Lakshmi&apos;s metals. Bringing them home on Dhanteras means inviting her in.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  And it doesn&apos;t have to be a heavy investment. A small gold coin, a silver Lakshmi-Ganesha idol, a set of silver spoons — the tradition is about the act of buying, not the amount.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">
                  What to look for:
                </h3>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>Gold coins</strong> — 24-karat or 22-karat, BIS hallmarked</li>
                  <li><strong>Silver coins</strong> — Lakshmi, Ganesha, or Lakshmi-Ganesha combo</li>
                  <li><strong>Silver utensils</strong> — bowls, spoons, glasses — functional and auspicious</li>
                  <li><strong>Brass and copper vessels</strong> — considered deeply auspicious, more affordable than silver</li>
                </ul>

                <div className="flex items-start gap-3 bg-[#F0EEFF] border border-[#E0DAFF] rounded-2xl p-4 sm:p-5">
                  <p className="text-sm text-[#5B4FBE] font-medium italic leading-relaxed">
                    &quot;The size of the coin doesn&apos;t matter. The tradition says buying something of value matters.&quot;
                  </p>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">
                  Where to find the deals:
                </h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> — gold and silver coins from certified sellers, with bank cashback offers stacking on top. Compare prices across sellers and check for BIS hallmark certification before buying.
                </p>
              </section>

              {/* SECTION: Electronics */}
              <section id="electronics" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Smartphone className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Electronics — The Modern Dhanteras Purchase
                  </h2>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] italic">
                  Around 72% of Indians plan to buy electronics on Dhanteras. You are not alone in this.
                </h3>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Smartphones, laptops, smart TVs, earbuds, smartwatches — electronics have become as much a part of Dhanteras as gold coins. The logic is the same: bringing something new and useful into the home on this auspicious day invites abundance.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The practical reality: Dhanteras is also one of the best days of the year to buy electronics. Platforms know the demand, and the deals are real.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">
                  Electronics worth buying on Dhanteras 2026:
                </h3>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Smartphones</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  If a phone upgrade has been on your list, Dhanteras is the time. Bank EMI offers, exchange bonuses, and cashback deals tend to stack on this day. Check both <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> and <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Flipkart coupon codes</Link> — prices vary across platforms even for identical models.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Laptops</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Work laptops, student laptops, gaming laptops — all see Dhanteras pricing. Dhanteras + Diwali combined mean the festive sale has been running for weeks, but the sharpest prices often land on the day itself.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Smart TVs</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  A new TV for the living room is a classic Dhanteras purchase. Sizes from 32-inch to 65-inch all see significant discounts. Check <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Flipkart coupon codes</Link> — their electronics section typically has the widest TV range.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Earbuds & Smartwatches</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Smaller electronics that make great Dhanteras self-gifts or family gifts. Under-₹999 options exist across both platforms.
                </p>

                <div className="flex items-start gap-3 bg-[#FFF9F2] border border-[#FFD9A8] rounded-2xl p-4 sm:p-5 mt-4">
                  <AlertTriangle className="w-5 h-5 text-[#FF9900] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#8A5100] leading-relaxed">
                    <strong>The deal-stacking trick:</strong> Bank card offer + platform coupon + exchange bonus = three layers of saving on the same product. Use <Link href="/stores" className="text-[#5B4FBE] font-semibold hover:underline">CouponsCrew store pages</Link> before checkout to check what&apos;s currently active.
                  </p>
                </div>
              </section>

              {/* SECTION: Home Appliances */}
              <section id="home-appliances" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <HomeIcon className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Home Appliances — The Smartest Dhanteras Investment
                  </h2>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] italic">
                  &quot;A new refrigerator. A new washing machine. An air fryer, finally.&quot;
                </h3>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Home appliances are where Dhanteras meets practical family decision-making. The large-ticket items that have been &quot;we&apos;ll think about it&quot; conversations all year — Dhanteras is when families pull the trigger. And wisely so, because the deals on appliances during the Diwali period are the strongest of the year.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">
                  Appliances people buy on Dhanteras:
                </h3>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Kitchen Appliances</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Mixer grinders, air fryers, OTGs, induction cooktops, instant pots — <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> and <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Flipkart coupon codes</Link> both run heavy Dhanteras-specific deals on kitchen electronics.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Large Appliances</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Refrigerators, washing machines, dishwashers, air conditioners — the larger the item, the larger the discount on Dhanteras. If delivery timing matters (you want it before Diwali on November 8), <strong>order today or tomorrow</strong> — delivery for large appliances takes two to four days.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Water Purifiers & Air Purifiers</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Health-forward purchases that have become increasingly popular as Dhanteras buys — practical, auspicious, and genuinely useful.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Home Décor & Furniture</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Not just appliances — Dhanteras is also a strong moment for home décor. New cushion covers, rugs, curtains, lamps for the living room. For furniture — sofas, dining tables, storage units — <Link href="/stores/pepperfry-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Pepperfry coupon codes</Link> runs one of its biggest festive sales around Dhanteras and Diwali.
                </p>
              </section>

              {/* SECTION: Gifting */}
              <section id="gifting" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Gift className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Dhanteras Gifting — Because It&apos;s Not Just About Your Own Home
                  </h2>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] italic">
                  &quot;Kya le jaao unke liye?&quot; — Every person, every year.
                </h3>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Dhanteras gifts are tricky. You want something that feels meaningful, looks good, and doesn&apos;t cost a fortune. The categories that consistently work:
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Skincare & Beauty Sets</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Gifting skincare sets — face serums, moisturisers, face masks packaged together — has become genuinely popular for Dhanteras. <Link href="/stores/nykaa-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Nykaa coupon codes</Link> for festive beauty sets and hampers.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Perfumes & Fragrances</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Classic, appreciated, easy to gift. <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> or <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Myntra coupon codes</Link> for branded options.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Eyewear</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  A pair of sunglasses or stylish blue-light glasses is a practical and well-received gift. <Link href="/stores/lenskart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Lenskart coupon codes</Link> — check for active Dhanteras or Diwali offers.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Dry Fruits & Festive Hampers</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Never goes wrong. <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Amazon coupon codes</Link> and <Link href="/stores/jiomart-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">JioMart coupon codes</Link> for packaged dry fruit assortments and festive gift sets.
                </p>
              </section>

              {/* SECTION: Shopping Survival Guide */}
              <section id="survival-guide" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-[#5B4FBE]">
                  <Zap className="w-6 h-6 shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    Dhanteras 2026 Shopping Survival Guide
                  </h2>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Order by today or tomorrow for Diwali delivery.</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Dhanteras is November 6. Diwali is November 8. Standard delivery for electronics and appliances is two to four days. Order now for guaranteed arrival before Diwali. Express delivery exists but costs more — save it for last-minute smaller items.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Stack your offers before buying.</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  A bank card offer + platform coupon + exchange cashback is three layers of saving. Check <Link href="/stores" className="text-[#5B4FBE] font-semibold hover:underline">CouponsCrew stores</Link> for active coupon codes before adding anything to cart.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">For gold and silver — check BIS hallmark.</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Always verify the hallmark on gold and silver before buying online. Reputable sellers on Amazon list certification details on the product page.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Large appliances: measure first.</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  It sounds obvious. But the number of people who&apos;ve ordered a washing machine and then realised the delivery point doesn&apos;t fit is very real. Measure the space before ordering anything large.
                </p>

                <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A2E] pt-2">Puja muhurat is evening.</h3>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The pradosh period — after sunset on November 6 — is the most auspicious time for Dhanteras puja. Purchases made anytime during the day count, but if you&apos;re performing the actual Lakshmi-Kubera puja, plan it for the evening.
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
                  Dhanteras comes once a year. The purchases you make today — whether a gold coin or a new phone — carry something beyond their price tag. Shop with intent, stack your deals, and let Goddess Lakshmi in.
                </p>
                <Link href="/festival-offers/diwali-offers" className="inline-flex items-center gap-2 bg-white text-[#1A1A2E] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-colors">
                  <span>See all Diwali Offers 2026</span>
                  <ArrowRight size={14} />
                </Link>
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
                  <h3 className="font-extrabold text-[#1A1A2E] text-base">Key Dhanteras Details</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Date</strong>
                    <span className="text-gray-600">Friday, 6 November 2026</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Puja Muhurat</strong>
                    <span className="text-gray-600">Evening, pradosh period, ~5:30 PM to 7:30 PM</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Top Buys</strong>
                    <span className="text-gray-600">Gold, Silver, Electronics, Appliances</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Diwali Is</strong>
                    <span className="text-gray-600">November 8, 2026 — order 2-4 days ahead</span>
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
                    { title: 'Dhanteras 2026 — Quick Facts', href: '#quick-facts' },
                    { title: 'Gold & Silver', href: '#gold-silver' },
                    { title: 'Electronics', href: '#electronics' },
                    { title: 'Home Appliances', href: '#home-appliances' },
                    { title: 'Dhanteras Gifting', href: '#gifting' },
                    { title: 'Shopping Survival Guide', href: '#survival-guide' },
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
                  Stack Dhanteras deals with verified coupons on Amazon, Flipkart, Pepperfry &amp; more.
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
