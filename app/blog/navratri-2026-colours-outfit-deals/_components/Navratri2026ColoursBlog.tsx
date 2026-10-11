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

const PAGE_URL = 'https://www.couponscrew.com/blog/navratri-2026-colours-outfit-deals';
const PAGE_TITLE = 'Navratri 2026 Colours: Outfit Deals for All Nine Days';

const RELATED_POSTS = [
  {
    slug: 'myntra-big-fashion-festival-2026',
    title: 'Myntra Big Fashion Festival 2026: Date, Insider Early Access and Bank Offers',
    category: 'Fashion',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790820841/myntra-big-fashion-festival-2026_gbsc9h.webp',
    date: 'Oct 1, 2026',
    readTime: '8 min read',
    excerpt: 'Myntra Big Fashion Festival (BFF) 2026 opens on 8 October 2026 at midnight, with early access from 7 October for Myntra Insiders and VIP ticket holders.',
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
  {
    slug: 'appliance-buying-guide-exchange-offer-sale-2026',
    title: 'TV, Fridge, Washing Machine: Appliance Buying Guide and How Exchange Offers Work',
    category: 'Electronics',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1791303473/appliance-buying-guide-exchange-offer-sale-2026_c1xqzk.webp',
    date: 'Oct 6, 2026',
    readTime: '11 min read',
    excerpt: 'Buying a TV, fridge or washing machine in the October 2026 sales? Check the new star labels, recent price rises and how exchange value is really decided.',
  },
];

const FAQS = [
  {
    q: 'What are the Navratri 2026 colours?',
    a: 'The Navratri 2026 colours are orange (11 October), white (12 October), red (13 October), royal blue (14 October), yellow (15 October), green (16 October), grey (17 October), purple (18 October) and peacock green (19 October). Dussehra on 20 October has no fixed colour.',
  },
  {
    q: 'What colour is Day 1 of Navratri 2026?',
    a: 'Day 1 of Navratri 2026, Sunday 11 October, is orange. The day is dedicated to Maa Shailaputri.',
  },
  {
    q: 'Why do the Navratri colours change every year?',
    a: 'The Navratri colours change every year because each colour is linked to a weekday. Navratri starts on a different weekday each year, so the order of colours shifts. In 2026, it starts on a Sunday, so the list begins with orange.',
  },
  {
    q: 'Do I have to wear the Navratri colour every day?',
    a: "No. Wearing the day's colour is a popular custom, not a religious requirement. Many people follow it for celebrations at work, in housing societies or at garba events, and some families follow their own list.",
  },
  {
    q: 'How can I wear all nine Navratri colours on a budget?',
    a: 'Build around a white base outfit and change the colour with dupattas, stoles or jackets. With a white kurta set, a yellow kurta, a grey piece and a few coloured dupattas, you can cover all nine colours with four main purchases.',
  },
];

export default function Navratri2026ColoursBlog() {
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
            <span className="text-[#1A1A2E] font-semibold truncate">Navratri 2026 Colours</span>
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
                  Navratri 2026 Colours: Outfit Deals for All Nine Days
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Oct 11, 2026</span>
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
              <div className="relative w-full sm:h-130 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1791728627/Navratri_2026_Colours_and_Outfit_Deals_k0hl00.webp"
                  alt="Navratri 2026 Colours: Outfit Deals for All Nine Days"
                 fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>

              {/* Intro Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <p className="text-base sm:text-lg text-[#1A1A2E] font-medium leading-relaxed">
                  <strong>Sharad Navratri 2026 runs from Sunday, 11 October to Monday, 19 October, and Dussehra is on 20 October.</strong> The nine colours this year are orange, white, red, royal blue, yellow, green, grey, purple and peacock green, in that order. Because the festival starts on a Sunday, the list opens with orange.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed italic">
                  Last updated: 11 October 2026. Today is Day 1 (orange). Tomorrow, Monday 12 October, is white.
                </p>
              </div>

              {/* SECTION 1: Full nine-day list */}
              <section id="colour-list" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Navratri 2026 colours: the full nine-day list
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Day</th>
                        <th className="p-4 sm:px-6">Date</th>
                        <th className="p-4 sm:px-6">Goddess</th>
                        <th className="p-4 sm:px-6">Colour</th>
                        <th className="p-4 sm:px-6">What the colour stands for</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">1</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Sun, 11 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Maa Shailaputri</td>
                        <td className="p-4 sm:px-6 font-semibold text-[#FF5722]">Orange</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Warmth and energy</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">2</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Mon, 12 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Maa Brahmacharini</td>
                        <td className="p-4 sm:px-6 font-semibold text-[#FF5722]">White</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Purity and calm</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">3</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Tue, 13 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Maa Chandraghanta</td>
                        <td className="p-4 sm:px-6 font-semibold text-[#FF5722]">Red</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Strength and courage</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">4</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Wed, 14 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Maa Kushmanda</td>
                        <td className="p-4 sm:px-6 font-semibold text-[#FF5722]">Royal blue</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Grace and abundance</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">5</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Thu, 15 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Maa Skandamata</td>
                        <td className="p-4 sm:px-6 font-semibold text-[#FF5722]">Yellow</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Happiness and optimism</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">6</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Fri, 16 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Maa Katyayani</td>
                        <td className="p-4 sm:px-6 font-semibold text-[#FF5722]">Green</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Growth and new beginnings</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">7</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Sat, 17 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Maa Kalaratri</td>
                        <td className="p-4 sm:px-6 font-semibold text-[#FF5722]">Grey</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Balance</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">8</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Sun, 18 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Maa Mahagauri</td>
                        <td className="p-4 sm:px-6 font-semibold text-[#FF5722]">Purple</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Prosperity</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">9</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Mon, 19 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Maa Siddhidatri</td>
                        <td className="p-4 sm:px-6 font-semibold text-[#FF5722]">Peacock green</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Freshness and compassion</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">10</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Tue, 20 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Dussehra (Vijayadashami)</td>
                        <td className="p-4 sm:px-6 font-semibold text-[#FF5722]">No fixed colour</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Festive wear of your choice</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  The colours are set by the weekday each Navratri day falls on, which is why the list changes from year to year. Wearing the day&apos;s colour is a popular custom rather than a religious rule, and some regions, communities and families follow their own lists. If your family or housing society follows a different list, go with theirs.
                </p>
              </section>

              {/* SECTION 2: Four-piece plan */}
              <section id="four-piece-plan" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  You do not need nine new outfits
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  The easiest way to follow all nine colours without buying nine outfits is to build around a few base pieces and change one coloured item each day. Here is a plan that covers every colour with four main purchases.
                </p>

                <div className="space-y-3 pt-2">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">The four-piece plan</h3>
                  <ol className="list-decimal pl-5 text-[#4A4A6A] space-y-2">
                    <li><strong>A white or off-white kurta set</strong> (or white kurta and churidar for men). This covers Day 2 on its own.</li>
                    <li><strong>A plain coloured kurta or saree in one of the brighter colours</strong> you will reuse, such as yellow or red.</li>
                    <li><strong>Two or three dupattas, stoles or jackets</strong> in the colours your base pieces do not cover. A dupatta changes the colour of an outfit more than anything else for the money.</li>
                    <li><strong>One grey or neutral piece</strong> for Day 7, which can be a kurta, a Nehru jacket or a saree.</li>
                  </ol>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  With these, a white kurta plus an orange dupatta works for Day 1, the same white kurta with a royal blue dupatta for Day 4, and with a green or peacock green stole for Days 6 and 9. A yellow kurta covers Day 5, and with a purple dupatta it is ready for Day 8.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  This plan also saves money in a sale, because dupattas, stoles and jackets usually cost far less than full sets, and they are often the items with the biggest discounts.
                </p>

                <div className="space-y-3 pt-4 border-t border-[#E8E8F0]">
                  <h3 className="text-lg font-bold text-[#1A1A2E]">Ideas for each day</h3>

                  <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#5B4FBE] text-white font-bold">
                          <th className="p-4 sm:px-6">Day</th>
                          <th className="p-4 sm:px-6">Colour</th>
                          <th className="p-4 sm:px-6">Women</th>
                          <th className="p-4 sm:px-6">Men</th>
                          <th className="p-4 sm:px-6">Budget shortcut</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8F0]">
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">1</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Orange</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Orange or saffron kurta set, bandhani saree</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Orange kurta, or white kurta with orange stole</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Orange dupatta on a white base</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">2</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">White</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">White chikankari kurta, white saree with coloured border</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">White kurta pyjama</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Your white base piece</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">3</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Red</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Red saree or lehenga, red anarkali</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Maroon or red kurta</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Red dupatta or red bindi and bangles</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">4</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Royal blue</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Royal blue silk saree or kurta</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Navy or royal blue kurta, blue Nehru jacket</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Royal blue dupatta or jacket</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">5</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Yellow</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Yellow kurta set, yellow cotton saree</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Mustard or yellow kurta</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Yellow kurta as a reusable base</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">6</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Green</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Green lehariya or bandhani</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Bottle green kurta</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Green stole on white</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">7</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Grey</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Grey or silver saree, grey kurta with silver jewellery</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Grey kurta or jacket</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Grey Nehru jacket over white</td>
                        </tr>
                        <tr className="bg-[#F8F8FF]">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">8</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Purple</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Purple or lavender kurta, purple saree</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Purple or wine kurta</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Purple dupatta on yellow or white</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">9</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Peacock green</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Teal or peacock green saree, kurta with peacock motif</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Teal kurta</td>
                          <td className="p-4 sm:px-6 text-[#4A4A6A]">Teal stole or jacket</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION 3: Garba and dandiya */}
              <section id="garba-dandiya" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Garba and dandiya nights: what to wear and what to skip
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  If you are dancing at garba or dandiya events, comfort matters as much as colour.
                </p>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>Chaniya choli or a flared skirt</strong> gives room to move. Pick one with a lighter fabric if the venue is outdoors.</li>
                  <li><strong>Kediyu with dhoti or churidar</strong> is the traditional men&apos;s option; a short kurta works if you want something simpler.</li>
                  <li><strong>Footwear:</strong> Flat juttis, mojaris or kolhapuris are easier to dance in than heels. New footwear can rub on a long night, so wear it at home once before the event.</li>
                  <li><strong>Jewellery:</strong> Oxidised silver jewellery goes with almost every Navratri colour, which makes it a good single buy for all nine days.</li>
                  <li><strong>Dupattas:</strong> Pin them in place for dancing; loose dupattas catch on dandiya sticks.</li>
                </ul>
              </section>

              {/* SECTION 4: Where to shop */}
              <section id="where-to-shop" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Where to shop Navratri outfits during the sales
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Navratri starts while the big festive sales are still running. Myntra&apos;s Big Fashion Festival opened on 8 October, Amazon Great Indian Festival on 8 October and Flipkart Big Billion Days on 9 October. Check each app for the sale&apos;s end date, as offers change through the sale.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">Store</th>
                        <th className="p-4 sm:px-6">Good for</th>
                        <th className="p-4 sm:px-6">What to check</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">
                          <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] hover:underline">Myntra</Link>
                        </td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Widest range of ethnic wear brands, sarees and kurta sets</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Bank offer on the payment page; in the early-bird phase Myntra listed 10% off on HDFC Bank credit cards</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">
                          <Link href="/stores/ajio-coupon-code" className="text-[#5B4FBE] hover:underline">Ajio</Link>
                        </td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Ethnic wear brands and men&apos;s kurtas</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Ajio&apos;s own festive offers and coupons at checkout</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">
                          <Link href="/stores/lifestyle-coupon-code" className="text-[#5B4FBE] hover:underline">Lifestyle</Link>
                        </td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Kurta sets and jackets from in-house labels</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Store pickup can be faster than delivery</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">
                          <Link href="/stores/hm-coupon-code" className="text-[#5B4FBE] hover:underline">H&amp;M</Link>
                        </td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Plain tops, shirts and trousers in the day&apos;s colour</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Good for office days when full ethnic wear is not practical</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">
                          <Link href="/stores/amazon-coupon-code" className="text-[#5B4FBE] hover:underline">Amazon</Link> and <Link href="/stores/flipkart-coupon-code" className="text-[#5B4FBE] hover:underline">Flipkart</Link>
                        </td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Budget sarees, dupattas, juttis and jewellery</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Seller rating and return policy for each item</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  Our <Link href="/blog/myntra-big-fashion-festival-2026" className="text-[#5B4FBE] font-semibold hover:underline">Myntra Big Fashion Festival 2026 guide</Link> covers the sale&apos;s early access and bank offers in detail. Current offers across fashion stores are on our <Link href="/stores/categories/fashion" className="text-[#5B4FBE] font-semibold hover:underline">fashion offers page</Link>, and jewellery deals are on the <Link href="/stores/categories/jewellery" className="text-[#5B4FBE] font-semibold hover:underline">jewellery offers page</Link>.
                </p>
              </section>

              {/* SECTION 5: Order by dates */}
              <section id="order-by-dates" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  Order by these dates to get it in time
                </h2>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Delivery during big sales is often slower than usual. Use these as rough cut-off points for standard delivery in most cities. Delivery in smaller towns can take longer, so add a few days.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-[#E8E8F0] mt-4">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#5B4FBE] text-white font-bold">
                        <th className="p-4 sm:px-6">For this day</th>
                        <th className="p-4 sm:px-6">Colour</th>
                        <th className="p-4 sm:px-6">Order by</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0]">
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Day 4, Wed 14 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Royal blue</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Today (11 Oct)</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Day 5, Thu 15 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Yellow</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">11 or 12 Oct</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Day 6, Fri 16 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Green</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">12 Oct</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Day 7, Sat 17 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Grey</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">13 Oct</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Day 8, Sun 18 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Purple</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">14 Oct</td>
                      </tr>
                      <tr className="bg-[#F8F8FF]">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Day 9, Mon 19 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Peacock green</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">15 Oct</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 sm:px-6 font-semibold text-[#1A1A2E]">Dussehra, Tue 20 Oct</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">Any</td>
                        <td className="p-4 sm:px-6 text-[#4A4A6A]">16 Oct</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[#4A4A6A] leading-relaxed">
                  For Days 2 and 3 (12 and 13 October), standard delivery is unlikely to arrive in time. Use what you already have, a local store, or a fast delivery service if one is available in your city. Some fashion apps now offer same-day or quick delivery in larger cities; check the delivery date shown on the product page before paying.
                </p>
                <p className="text-[#4A4A6A] leading-relaxed">
                  Before ordering, check whether the item can be returned or exchanged. Ethnic wear with alterations, stitched blouses and some jewellery are often not returnable.
                </p>
              </section>

              {/* SECTION 6: How to save more */}
              <section id="save-more" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A1A2E]">
                  How to save more on Navratri shopping
                </h2>
                <ul className="list-disc pl-5 text-[#4A4A6A] space-y-2">
                  <li><strong>Buy the dupattas and accessories first.</strong> They give the most colours for the least money.</li>
                  <li><strong>Check fabric and size charts.</strong> Ethnic wear sizing differs a lot between brands. Read reviews that mention fit, especially for kurta sets and blouses.</li>
                  <li><strong>Stack the sale price, a coupon and the bank offer.</strong> A coupon applies before the bank discount, so check whether it takes your cart below the bank offer&apos;s minimum order.</li>
                  <li><strong>Think past Navratri.</strong> A good saree or kurta set bought now can also work for Dussehra, Karwa Chauth on 28 October and Diwali on 8 November. Our <Link href="/blog/october-2026-sale-calendar-india" className="text-[#5B4FBE] font-semibold hover:underline">October 2026 sale calendar</Link> lists the festival and sale dates together.</li>
                </ul>
                <p className="text-[#4A4A6A] leading-relaxed">
                  If you are fasting during Navratri, quick-commerce apps such as <Link href="/stores/blinkit-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Blinkit</Link> and <Link href="/stores/zepto-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">Zepto</Link> are the fastest way to get vrat groceries and puja items on the day you need them. Dussehra deals are on our <Link href="/festival-offers/dusshera-offers" className="text-[#5B4FBE] font-semibold hover:underline">Dussehra offers page</Link>.
                </p>
              </section>

              {/* SECTION 7: FAQ */}
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
                  Navratri is nine days long, but the shopping only needs one evening. Pick your base pieces, add the dupattas for the colours you are missing, and check the delivery date against the table above before you pay. Anything that arrives after its day can still go on for Dussehra.
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
                    <strong className="text-[#1A1A2E] block">Navratri 2026 Dates</strong>
                    <span className="text-gray-600">11 Oct to 19 Oct</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Dussehra 2026</strong>
                    <span className="text-gray-600">20 October</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Today&apos;s Colour</strong>
                    <span className="text-gray-600">Day 1, Orange (11 Oct)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Tomorrow&apos;s Colour</strong>
                    <span className="text-gray-600">Day 2, White (12 Oct)</span>
                  </div>
                  <div className="p-3 bg-[#F8F8FF] rounded-xl border border-[#E8E8F0]">
                    <strong className="text-[#1A1A2E] block">Budget Tip</strong>
                    <span className="text-gray-600">Cover all 9 colours with 4 pieces</span>
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
                    { title: 'Full Nine-Day Colour List', href: '#colour-list' },
                    { title: 'The Four-Piece Plan', href: '#four-piece-plan' },
                    { title: 'Garba & Dandiya Outfits', href: '#garba-dandiya' },
                    { title: 'Where to Shop', href: '#where-to-shop' },
                    { title: 'Order-By Dates', href: '#order-by-dates' },
                    { title: 'How to Save More', href: '#save-more' },
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
                  Stack Navratri sale prices with verified coupons on Myntra, Ajio, Amazon &amp; more.
                </p>
                <Link href="/stores/categories/fashion" className="inline-flex items-center gap-2 bg-white text-[#5B4FBE] text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors mt-2">
                  <span>View Fashion Deals</span>
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
