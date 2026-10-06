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

const PAGE_URL = 'https://www.couponscrew.com/blog/appliance-buying-guide-exchange-offer-sale-2026';
const PAGE_TITLE = 'TV, Fridge, Washing Machine: Appliance Buying Guide and How Exchange Offers Work';

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
    slug: 'no-cost-emi-real-cost-sale-2026',
    title: 'No Cost EMI in the Sale: What It Actually Costs and How to Check',
    category: 'Finance',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1791215474/No_Cost_EMI__What_You_Still_Pay_iuhik8.webp',
    date: 'Oct 5, 2026',
    readTime: '9 min read',
    excerpt: 'No Cost EMI is not always free. See the GST, processing fee and lost discounts behind it, with a worked example, before you shop Amazon or Flipkart sales.',
  },
];

const FAQS = [
  {
    q: 'Is the October 2026 sale a good time to buy a TV, fridge or washing machine?',
    a: 'Yes, if you compare carefully. Appliance makers raised prices by around 5% to 8% from 1 October 2026, so some sale discounts only bring prices back to September levels. Compare the final price after bank offers with the price you noted before the sale.',
  },
  {
    q: 'How is the exchange value of an old appliance decided?',
    a: 'The exchange value shown at checkout is an estimate. The final value is decided when the pickup agent inspects your old appliance, checking its brand, size or capacity, whether it works and whether basic accessories are present. If it does not match what you declared, the value can be reduced.',
  },
  {
    q: 'Is a 5-star fridge from 2025 still a 5-star fridge?',
    a: 'No. BEE tightened star ratings for refrigerators and ACs from 1 January 2026. A model rated 5-star under the 2025 rules is roughly equal to a 4-star under the 2026 rules. Check the year on the star label before comparing models.',
  },
  {
    q: 'Can I exchange a non-working TV or washing machine?',
    a: 'Often yes. Many exchange offers accept non-working appliances at a lower value. Declare the condition honestly at checkout, because the pickup agent will check whether it turns on and works.',
  },
  {
    q: 'Is it better to exchange my old appliance or sell it myself?',
    a: 'Selling it yourself often gets more money for a working appliance in good condition. Exchange is easier and makes sense for old, faulty or bulky appliances, or when the sale adds an exchange bonus. Get one local quote before deciding.',
  },
];

export default function ApplianceBuyingGuide2026Blog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">Appliance Buying Guide and Exchange Offers</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Header */}
              <div className="space-y-4">
                <span className="inline-block bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Electronics / Home Appliances
                </span>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  TV, Fridge, Washing Machine: Appliance Buying Guide and How Exchange Offers Work
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Oct 6, 2026</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FF5722]" />
                    <span>11 min read</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-[#1A1A2E] font-semibold">By CouponsCrew Editorial Team</span>
                </div>
              </div>

              {/* Banner Image */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1791303473/appliance-buying-guide-exchange-offer-sale-2026_c1xqzk.webp"
                  alt="TV, Fridge, Washing Machine: Appliance Buying Guide and How Exchange Offers Work"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  <strong>The October sales are a reasonable time to buy a TV, fridge or washing machine, but check three things first.</strong> Appliance makers raised prices by around 5% to 8% from 1 October, so compare sale prices with what you noted earlier, not with the MRP. Fridge star labels changed in January 2026, so an older 5-star model is roughly a new 4-star. And exchange offers are only an estimate until your old appliance is inspected at pickup.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed italic">
                  Last updated: 6 October 2026. Amazon Great Indian Festival starts on 8 October and Flipkart Big Billion Days on 9 October.
                </p>
              </div>

              {/* SECTION 1: What has changed */}
              <section id="what-changed" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                    What has changed for appliance buyers in 2026
                  </h2>
                  <p className="text-[#4A4A6A] leading-relaxed mt-2">
                    Three changes affect what you pay and what you get this year. Most sale pages will not mention them.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Prices went up again on 1 October</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Several brands raised appliance prices from 1 October 2026, the third round of increases this year. Reported increases include around 5% from Haier (with more planned through January), 5% to 7% from Godrej Appliances, and about 7% on TVs from Super Plastronics. Brands blamed higher copper, steel and aluminium costs, freight and currency swings. Daikin&apos;s chairman said copper prices had risen by almost 25% to 35%.
                  </p>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    What this means for you: part of the &quot;discount&quot; in this sale may only take prices back to where they were in September. If you noted a price before 1 October, compare against that.
                  </p>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    TVs face an extra pressure. Memory chips are more expensive this year, and smart TVs use them too. Counterpoint Research has reported buyers moving to smaller screen sizes as prices rise.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Star labels for fridges and ACs changed in January 2026</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    The Bureau of Energy Efficiency (BEE) tightened its star rating rules from 1 January 2026 for air conditioners and refrigerators. A model that was 5-star under the 2025 rules is roughly equal to a 4-star under the new rules, and the same shift applies down the scale. New 5-star models are about 10% more efficient than the old 5-star, and cost more.
                  </p>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    This matters in a sale because older stock can still be on the shelf. Look at the label year on the product images or specifications. A 2025-labelled 5-star fridge at a good price can still be a fair buy, but compare it with 2026-labelled 4-star models, not 2026 5-star models.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">GST on bigger TVs and ACs is lower than before</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Since 22 September 2025, TVs of all sizes, air conditioners and dishwashers are taxed at 18% GST. Before that, ACs, dishwashers and TVs above 32 inches were taxed at 28%. Refrigerators and washing machines are also at 18%. The cut is already in today&apos;s prices, so it is not an extra sale saving, but it is part of why bigger TVs cost less relative to small ones than they did two years ago.
                  </p>
                </div>
              </section>

              {/* SECTION 2: How exchange offers work */}
              <section id="exchange-offers" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  How exchange offers actually work
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  An exchange offer gives you a discount on the new appliance in return for your old one. The value you see at checkout is an estimate. The final amount is decided when someone inspects your old appliance at your home.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">Here is the usual process on Amazon, Flipkart and brand stores:</p>
                <ol className="list-decimal pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>You declare your old appliance at checkout:</strong> type, brand, size or capacity, and whether it works.</li>
                  <li><strong>The site shows an exchange value</strong> and deducts it from the price.</li>
                  <li><strong>The new appliance is delivered.</strong> The old one is picked up at delivery or shortly after, depending on the logistics partner.</li>
                  <li><strong>The pickup agent inspects the old appliance.</strong> They check the brand, model and capacity, switch it on, look for damage and check basic accessories such as the TV remote.</li>
                  <li><strong>If it matches what you declared, the exchange is completed.</strong> If it does not, the value can be reduced, or the exchange can be cancelled and you pay the difference.</li>
                </ol>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Once the exchange partner has accepted your old appliance, you usually cannot get it back. Make sure you are happy with the final value before you hand it over.
                </p>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">What &quot;working&quot; means at pickup</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Inspection rules vary by seller, but published exchange terms from major brands use checks like these:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#5B4FBE] text-white font-bold">
                          <th className="p-4 sm:px-6">Appliance</th>
                          <th className="p-4 sm:px-6">Usually counted as working</th>
                          <th className="p-4 sm:px-6">Usually counted as not working</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8F0]">
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">TV</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Screen turns on and shows a clear picture; no cracks, lines or patches</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Cracked screen, lines, spots or discoloured patches</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Refrigerator</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Turns on and cools normally</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Weak cooling, compressor failure, cracked or rusted body</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Washing machine</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Turns on, drum rotates, controls work</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Control panel failure, drum fault, unusual noise</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">AC</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Both units present and of the same brand; turns on; no major damage</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Compressor failure, rusted outdoor unit</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    Declare the condition honestly. Marking a faulty appliance as working is the most common reason exchange values get cut at the door.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Is the exchange value a good deal?</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Often, the exchange value is lower than what you could get by selling the appliance yourself. One major brand&apos;s published exchange terms list values from ₹550 to ₹5,000, depending on the appliance and its condition. A working TV or fridge in good shape can sometimes sell for more through a local buyer or an online classifieds listing.
                  </p>
                  <p className="text-[#4A4A6A] leading-relaxed">Exchange still makes sense when:</p>
                  <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                    <li>Your old appliance is old, faulty or bulky, and selling it would take time and effort.</li>
                    <li>The exchange bonus in the sale is high, which some brands add on top of the normal value.</li>
                    <li>You need the old one removed on the same day the new one arrives.</li>
                  </ul>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Before you choose exchange, get one quick quote from a local buyer. If it is much higher than the exchange value, sell it yourself and take the bank offer on the full price instead.
                  </p>
                </div>
              </section>

              {/* SECTION 3: TV checklist */}
              <section id="tv-checklist" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Buying checklist: televisions
                </h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Pick the size for your room</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">
                    Size matters more than most specifications. As a rough guide, measure the distance from your seat to the wall where the TV will go:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#5B4FBE] text-white font-bold">
                          <th className="p-4 sm:px-6">Viewing distance</th>
                          <th className="p-4 sm:px-6">Common screen size</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8F0]">
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Up to about 5 ft</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">32 to 43 inches</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">About 5 to 7 ft</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">43 to 50 inches</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">About 7 to 9 ft</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">55 inches</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">More than 9 ft</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">65 inches and above</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[#4A4A6A] leading-relaxed">
                    This is a starting point, not a rule. A 4K TV can be viewed from closer than an HD one without looking grainy.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">What else to check</h3>
                  <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                    <li><strong>Resolution:</strong> At 43 inches and above, 4K is now standard and worth having.</li>
                    <li><strong>Panel type:</strong> LED is the most common. QLED and OLED have better colour and contrast and cost more. Check reviews for the exact model, not just the panel name.</li>
                    <li><strong>Software and updates:</strong> Smart TVs depend on their operating system. Check which OS it runs and whether your apps are supported.</li>
                    <li><strong>Warranty:</strong> Look for the panel warranty separately from the standard warranty. The panel is the most expensive part to replace.</li>
                    <li><strong>Installation and wall mount:</strong> Some listings include free wall mounting; others charge for it. Check before you compare prices.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 4: Fridge checklist */}
              <section id="fridge-checklist" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Buying checklist: refrigerators
                </h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Pick the capacity for your household</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">As a rough guide:</p>

                  <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#5B4FBE] text-white font-bold">
                          <th className="p-4 sm:px-6">Household</th>
                          <th className="p-4 sm:px-6">Common capacity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8F0]">
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">1 to 2 people</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">About 180 to 250 litres</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">3 to 4 people</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">About 250 to 350 litres</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">5 or more people</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">350 litres and above</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[#4A4A6A] leading-relaxed">Cook often or buy groceries in bulk? Go one size up.</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">What else to check</h3>
                  <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                    <li><strong>Direct cool or frost free:</strong> Direct cool models cost less and use less power but need manual defrosting. Frost free models defrost on their own.</li>
                    <li><strong>Star label and its year:</strong> Check the BEE label and the year on it, as explained above. A higher star rating saves on electricity over the fridge&apos;s life.</li>
                    <li><strong>Compressor warranty:</strong> Many brands give a long warranty on the compressor, separate from the product warranty. Check the number of years on the listing.</li>
                    <li><strong>Inverter compressor:</strong> Adjusts its speed instead of switching on and off, which usually means lower power use and less noise.</li>
                    <li><strong>Space and door direction:</strong> Measure the space, including room for ventilation at the back, and check which way the door opens.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 5: Washing machine checklist */}
              <section id="washing-machine-checklist" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Buying checklist: washing machines
                </h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Pick the capacity for your household</h3>
                  <p className="text-[#4A4A6A] leading-relaxed">As a rough guide:</p>

                  <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#5B4FBE] text-white font-bold">
                          <th className="p-4 sm:px-6">Household</th>
                          <th className="p-4 sm:px-6">Common capacity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8F0]">
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">1 to 2 people</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">About 6 kg</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">3 to 4 people</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">About 7 kg</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">5 or more people</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">8 kg and above</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">What else to check</h3>
                  <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                    <li><strong>Front load or top load:</strong> Front load machines use less water and are gentler on clothes but cost more and take longer per wash. Top load machines are quicker and easier to load.</li>
                    <li><strong>Fully automatic or semi-automatic:</strong> Semi-automatic models cost less but need you to move clothes between tubs.</li>
                    <li><strong>Water supply:</strong> If your water pressure is low or the supply is irregular, check the model&apos;s requirements. Some machines struggle with low pressure.</li>
                    <li><strong>Motor warranty:</strong> Many brands give a longer warranty on the motor than on the machine.</li>
                    <li><strong>Installation:</strong> Check whether installation, the inlet pipe and a stand are included.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 6: Where to buy */}
              <section id="where-to-buy" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Where to buy: Amazon, Flipkart or the brand store
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6"></th>
                        <th className="p-4 sm:px-6">Amazon Great Indian Festival</th>
                        <th className="p-4 sm:px-6">Flipkart Big Billion Days</th>
                        <th className="p-4 sm:px-6">Brand&apos;s own store</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Starts</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">8 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">9 Oct (8 Oct early access for eligible members)</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Varies</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Bank offer announced</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">10% on SBI cards, including EMI</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Axis Bank and ICICI Bank cards</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Varies</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Extra offers</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Exchange Mela, Buy More Save More, Combos</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Exchange, BBD event deals</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Brand exchange bonus, extended warranty</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Brands named so far</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Not announced for appliances</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Haier, Acer, JBL and TCL among participants</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Own brand only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Compare the final price after the bank offer and exchange, not the headline sale price. Full sale details are in our <Link href="/blog/amazon-great-indian-festival-2026-upcoming-sales" className="text-[#5B4FBE] font-semibold hover:underline">Amazon Great Indian Festival 2026 guide</Link> and <Link href="/blog/big-billion-days-2026-flipkart-upcoming-sales" className="text-[#5B4FBE] font-semibold hover:underline">Big Billion Days 2026 guide</Link>. Current appliance offers across stores are on our <Link href="/stores/categories/home-and-kitchen" className="text-[#5B4FBE] font-semibold hover:underline">home and kitchen offers page</Link> and <Link href="/stores/categories/electronics" className="text-[#5B4FBE] font-semibold hover:underline">electronics offers page</Link>.
                </p>
              </section>

              {/* SECTION 7: EMI */}
              <section id="emi" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Paying on EMI for a big appliance
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Large appliances are the most common EMI purchase in festive sales. No Cost EMI can be useful, but it usually comes with 18% GST on the interest, sometimes a processing fee, and sometimes a smaller bank discount than full payment. Our guide on <Link href="/blog/no-cost-emi-real-cost-sale-2026" className="text-[#5B4FBE] font-semibold hover:underline">what No Cost EMI actually costs</Link> has a worked example and a checklist for the payment page.
                </p>
              </section>

              {/* SECTION 8: Delivery and installation */}
              <section id="delivery-installation" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Delivery and installation timing
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Big appliances take longer to deliver during sales, and installation is often booked separately after delivery.
                </p>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>For Dussehra (20 October):</strong> Many families buy appliances on Dussehra. To have it installed by then, order in the 8 to 10 October window.</li>
                  <li><strong>For Dhanteras (6 November) and Diwali (8 November):</strong> Order by late October. Installation slots fill up in the week before Diwali.</li>
                  <li><strong>On delivery day:</strong> Check the box for damage before signing. For TVs, many sellers require an unboxing by their technician; do not open the box yourself if the listing says so, or you may lose the damage claim.</li>
                </ul>
                <p className="text-[#4A4A6A] leading-relaxed">
                  All the festival and sale dates are in our <Link href="/blog/october-2026-sale-calendar-india" className="text-[#5B4FBE] font-semibold hover:underline">October 2026 sale calendar</Link>.
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
                  The best appliance deal this October is the one where you know three numbers before you click buy: the price before the 1 October increase, the final price after your bank offer, and what your old appliance is worth outside the exchange offer. With those in hand, the sale banners become easy to read.
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
                    <strong className="text-[#1A1A2E] block">Price Rise Since 1 Oct</strong>
                    <span className="text-gray-600">About 5% to 8% across brands</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">BEE Star Label Change</strong>
                    <span className="text-gray-600">Effective 1 Jan 2026 for fridges & ACs</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">GST on TVs & ACs</strong>
                    <span className="text-gray-600">18% since 22 Sep 2025 (was up to 28%)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Exchange Value Range</strong>
                    <span className="text-gray-600">₹550 to ₹5,000 (one major brand)</span>
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
                    { title: 'What Has Changed in 2026', href: '#what-changed' },
                    { title: 'How Exchange Offers Work', href: '#exchange-offers' },
                    { title: 'TV Buying Checklist', href: '#tv-checklist' },
                    { title: 'Refrigerator Checklist', href: '#fridge-checklist' },
                    { title: 'Washing Machine Checklist', href: '#washing-machine-checklist' },
                    { title: 'Where to Buy', href: '#where-to-buy' },
                    { title: 'Paying on EMI', href: '#emi' },
                    { title: 'Delivery & Installation', href: '#delivery-installation' },
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
                  Stack sale prices with verified coupons across electronics and home & kitchen stores.
                </p>
                <Link href="/stores/categories/home-and-kitchen" className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2">
                  <span>View Appliance Deals</span>
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
