'use client';

import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  Calendar,
  Clock,
  ShieldCheck,
  Tag,
  Tv,
  ArrowRight,
  HelpCircle,
  ShoppingBag,
  UtensilsCrossed,
  Sparkles,
  UserCheck,
  Film
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const FAQS = [
  {
    q: 'Where can I watch Bigg Boss 20 online?',
    a: 'Bigg Boss 20 streams on JioHotstar. Daily episodes go live at 9 PM IST, ahead of the Colors TV telecast at 10:30 PM IST the same night.',
  },
  {
    q: 'Is Bigg Boss 20 free to watch on JioHotstar?',
    a: 'Access depends on your Jio plan. Some mobile recharges include JioHotstar. A paid subscription is needed for the 24×7 live feed and before-TV episode drops. Check the app for what your current plan covers.',
  },
  {
    q: 'Who is hosting Bigg Boss Season 20?',
    a: 'Salman Khan is hosting Bigg Boss 20, continuing for his 17th consecutive season.',
  },
  {
    q: 'When does Bigg Boss 20 air?',
    a: 'Monday through Friday episodes air daily. Weekend Ka Vaar with Salman Khan runs on Saturday and Sunday. All episodes stream on JioHotstar at 9 PM IST first.',
  },
  {
    q: 'Can I vote for Bigg Boss 20 contestants for free?',
    a: 'Yes. Voting is free through the JioHotstar app. There is no official standalone voting app, and no legitimate voting service charges money.',
  },
];

const CONTESTANTS = [
  { name: 'Mary Kom', title: 'Olympic boxer and six-time world champion', tag: 'Athlete' },
  { name: 'Arishfa Khan', title: 'Actor and social media influencer', tag: 'Creator' },
  { name: 'Kanika Mann', title: 'Television actor', tag: 'TV Star' },
  { name: 'Kushal "Gullu" Tanwar', title: 'TV personality', tag: 'Personality' },
  { name: 'Khushi Dubey', title: 'Actor', tag: 'TV Star' },
  { name: 'Geeta Basra', title: 'Actor', tag: 'Bollywood' },
  { name: 'Qazi Touqeer', title: 'Singer', tag: 'Musician' },
  { name: 'Showik Chakraborty', title: 'Entrepreneur', tag: 'Business' },
  { name: 'Amrapali Dubey', title: 'Bhojpuri actor', tag: 'Cinema' },
  { name: 'Isha Rikhi', title: 'Actor', tag: 'Model & Actor' },
];

export default function BiggBoss() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#5B4FBE] transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A2E] font-semibold truncate">Bigg Boss Season 20 Where to Watch &amp; Deals</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">

              {/* Category Pill & Meta Header */}
              <div className="space-y-4">
                <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Entertainment &amp; OTT Guides
                </span>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  Bigg Boss Season 20 (2026): Where to Watch, Price &amp; Best Deals — Everything in One Place
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Sep 6, 2026</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FF5722]" />
                    <span>7 min read</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-[#1A1A2E] font-semibold">Published by CouponsCrew</span>
                </div>
              </div>

              {/* Main Banner Image */}
              <div className="relative w-full sm:h-130 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0]">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1789314709/bigg-boss-season-20-where-to-watch-deals_ggtlzz.webp"
                  alt="Bigg Boss Season 20 (2026) — Where to Watch on JioHotstar, Price, Contestants & Best Deals | CouponsCrew"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-sm font-bold bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                    🔥 Bigg Boss 20 Special Streaming &amp; Deals Guide
                  </span>
                </div>
              </div>

              {/* Article Content Container */}
              <div className="prose-content space-y-8 text-[#1A1A2E] text-base sm:text-[16px] leading-relaxed">

                {/* Intro Paragraph */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E8F0] shadow-xs space-y-4">
                  <p className="text-lg text-[#1A1A2E] font-medium leading-relaxed">
                    Bigg Boss 20 premiered on September 6, 2026, with Salman Khan returning as host for a record 17th consecutive season. You can watch it on JioHotstar (OTT, 9 PM IST) or Colors TV (broadcast, 10:30 PM IST). Here's everything you need — platform, price, cast, and ways to save money while watching.
                  </p>
                </div>

                {/* SECTION 1: Where to Watch */}
                <div id="where-to-watch" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E] flex items-center gap-2.5">
                    <Tv className="w-7 h-7 text-[#5B4FBE]" />
                    <span>Where to Watch Bigg Boss 20</span>
                  </h2>

                  <p className="text-[#4A4A6A]">
                    Bigg Boss 20 follows the same digital-first setup as recent seasons. JioHotstar streams each episode before it airs on television, and a 24×7 live house feed is available for paid subscribers who want unfiltered access between episodes.
                  </p>

                  <div className="bg-white rounded-2xl p-6 border border-[#E8E8F0] shadow-xs space-y-3">
                    <ul className="space-y-2.5 text-sm font-semibold text-[#1A1A2E]">
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#5B4FBE] mt-2 shrink-0"></span>
                        <span><strong>OTT:</strong> JioHotstar — daily episodes at 9:00 PM IST</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#5B4FBE] mt-2 shrink-0"></span>
                        <span><strong>TV:</strong> Colors TV — broadcast at 10:30 PM IST the same evening</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#5B4FBE] mt-2 shrink-0"></span>
                        <span><strong>Weekend Ka Vaar:</strong> Saturday and Sunday episodes with Salman Khan, streaming on JioHotstar first</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#5B4FBE] mt-2 shrink-0"></span>
                        <span><strong>Voting:</strong> Free on the JioHotstar app — no third-party app, no paid vote packs</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-[#4A4A6A] text-sm">
                    If you already have a Jio mobile number on an eligible plan, you may get JioHotstar access at no extra charge. Check the JioHotstar app directly for your current plan's streaming entitlements, since these vary by recharge tier.
                  </p>
                </div>

                {/* SECTION 2: Contestants */}
                <div id="contestants" className="space-y-4 pt-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E] flex items-center gap-2.5">
                    <UserCheck className="w-7 h-7 text-[#FF5722]" />
                    <span>Bigg Boss 20 Contestants</span>
                  </h2>

                  <p className="text-[#4A4A6A]">
                    The confirmed and strongly reported cast for Season 20 includes a mix of TV actors, athletes, musicians, and content creators:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {CONTESTANTS.map((person, idx) => (
                      <div key={idx} className="bg-white rounded-2xl p-4 border border-[#E8E8F0] shadow-xs flex items-center justify-between gap-3 hover:border-[#5B4FBE]/30 transition-colors">
                        <div>
                          <p className="text-base font-bold text-[#1A1A2E]">{person.name}</p>
                          <p className="text-xs text-gray-500 font-medium">{person.title}</p>
                        </div>
                        <span className="text-[10px] font-bold text-[#5B4FBE] bg-[#F0EEFF] px-2.5 py-1 rounded-full shrink-0">
                          {person.tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#F0EEFF] rounded-2xl p-5 border border-[#5B4FBE]/20 space-y-2">
                    <p className="text-sm font-semibold text-[#1A1A2E]">
                      The season's theme revolves around &quot;Vardaan&quot; (a divine boon), with the &quot;Extra Jeevan Daan&quot; twist giving certain contestants an extra lifeline inside the house — a format change from previous seasons.
                    </p>
                  </div>
                </div>

                {/* SECTION 3: How Much Does JioHotstar Cost? */}
                <div id="jiohotstar-cost" className="space-y-4 pt-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E]">
                    How Much Does JioHotstar Cost?
                  </h2>

                  <p className="text-[#4A4A6A]">
                    JioHotstar pricing is tied to your Jio recharge plan and standalone subscription options. Since OTT plan prices shift regularly, check the JioHotstar app or jio.com for the current rates before subscribing. What's worth knowing:
                  </p>

                  <div className="bg-white rounded-2xl p-6 border border-[#E8E8F0] shadow-xs">
                    <ul className="space-y-2.5 text-sm font-medium text-[#1A1A2E]">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#FF5722] font-bold">•</span>
                        <span>Certain Jio mobile recharges bundle JioHotstar access at no additional cost</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#FF5722] font-bold">•</span>
                        <span>A paid subscription unlocks the 24×7 live house feed and before-TV episode drops</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#FF5722] font-bold">•</span>
                        <span>Free ad-supported access may cover standard daily episodes — confirm in-app for the current season</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-[#4A4A6A] text-sm">
                    Rather than lock in a monthly plan just for one show, check whether a shorter-duration pack covers the BB20 season run.
                  </p>
                </div>

                {/* SECTION 4: Save More on Your Bigg Boss 20 Nights */}
                <div id="save-more" className="space-y-6 pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E]">
                      Save More on Your Bigg Boss 20 Nights
                    </h2>
                    <p className="text-[#4A4A6A]">
                      A daily 9 PM episode calls for the full setup — something to eat, something to wear, and somewhere comfortable to sit. Here are the deals worth having open before the episode starts.
                    </p>
                  </div>

                  {/* Food & Snacks */}
                  <div className="bg-white rounded-2xl p-6 border border-[#E8E8F0] shadow-xs space-y-3">
                    <h3 className="text-lg font-bold text-[#1A1A2E] flex items-center gap-2">
                      <UtensilsCrossed className="w-5 h-5 text-[#FF5722]" />
                      <span>Food &amp; Snacks Delivery</span>
                    </h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      Order in before the drama starts.{' '}
                      <Link href="/stores/zepto-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                        Zepto coupons
                      </Link>{' '}
                      and{' '}
                      <Link href="/stores/blinkit-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                        Blinkit coupons
                      </Link>{' '}
                      cover quick 10-minute grocery and snack delivery — useful if you've run out of munchies ten minutes before air time. For a proper dinner during Weekend Ka Vaar,{' '}
                      <Link href="/stores/dominos-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                        Domino's coupons
                      </Link>{' '}
                      and{' '}
                      <Link href="/stores/magicpin-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                        Magicpin coupons
                      </Link>{' '}
                      are worth checking — Magicpin in particular has local restaurant deals that can get you more for less.
                    </p>
                    <div className="pt-1">
                      <Link href="/stores/categories/food-and-grocery" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4FBE] hover:underline">
                        <span>Browse all Food &amp; Grocery deals on CouponsCrew</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Entertainment Deals */}
                  <div className="bg-white rounded-2xl p-6 border border-[#E8E8F0] shadow-xs space-y-3">
                    <h3 className="text-lg font-bold text-[#1A1A2E] flex items-center gap-2">
                      <Film className="w-5 h-5 text-[#5B4FBE]" />
                      <span>Entertainment Deals</span>
                    </h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      <Link href="/stores/bookmyshow-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                        BookMyShow coupons
                      </Link>{' '}
                      are useful if BB20 sparks interest in a live event, fan meet, or a movie night out.{' '}
                      <Link href="/stores/zee5-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                        ZEE5 coupons
                      </Link>{' '}
                      are worth bookmarking for days you want an alternative OTT pick alongside your Bigg Boss viewing.
                    </p>
                    <div className="pt-1">
                      <Link href="/stores/categories/entertainment" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4FBE] hover:underline">
                        <span>See more on the Entertainment deals page</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Dress Like the Housemates */}
                  <div className="bg-white rounded-2xl p-6 border border-[#E8E8F0] shadow-xs space-y-4">
                    <h3 className="text-lg font-bold text-[#1A1A2E] flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-[#FF5722]" />
                      <span>Dress Like the Housemates — For Less</span>
                    </h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      Every season, the Bigg Boss house becomes its own fashion reference. Contestants bring in a range of looks — from glam to casual streetwear — and it always moves what people search and shop for.
                    </p>
                    <p className="text-sm text-[#4A4A6A] font-semibold">
                      If a housemate's outfit catches your eye, these are the right places to look:
                    </p>
                    <ul className="space-y-2.5 text-sm text-[#1A1A2E]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5B4FBE] font-bold">•</span>
                        <span>
                          <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                            Myntra coupons
                          </Link>{' '}
                          — widest range of everyday fashion brands, usually the easiest starting point
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5B4FBE] font-bold">•</span>
                        <span>
                          <Link href="/stores/ajio-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                            AJIO coupons
                          </Link>{' '}
                          — strong on Indian designer labels and premium casual
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5B4FBE] font-bold">•</span>
                        <span>
                          <Link href="/stores/hm-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                            H&amp;M coupons
                          </Link>{' '}
                          — clean basics and on-trend wardrobe staples
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5B4FBE] font-bold">•</span>
                        <span>
                          <Link href="/stores/levis-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                            Levi's coupons
                          </Link>{' '}
                          — if denim is what caught your attention
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5B4FBE] font-bold">•</span>
                        <span>
                          <Link href="/stores/puma-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                            Puma coupons
                          </Link>{' '}
                          and{' '}
                          <Link href="/stores/nike-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                            Nike coupons
                          </Link>{' '}
                          — for the athleisure and sporty looks
                        </span>
                      </li>
                    </ul>
                    <div className="pt-1">
                      <p className="text-xs text-[#4A4A6A]">
                        Browse the full{' '}
                        <Link href="/stores/categories/fashion" className="text-[#5B4FBE] font-bold hover:underline">
                          Fashion category
                        </Link>{' '}
                        and{' '}
                        <Link href="/stores/categories/clothing-and-accessories" className="text-[#5B4FBE] font-bold hover:underline">
                          Clothing &amp; Accessories
                        </Link>{' '}
                        for a wider selection.
                      </p>
                    </div>
                  </div>

                  {/* Beauty & Skincare */}
                  <div className="bg-white rounded-2xl p-6 border border-[#E8E8F0] shadow-xs space-y-3">
                    <h3 className="text-lg font-bold text-[#1A1A2E] flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#5B4FBE]" />
                      <span>Beauty &amp; Skincare</span>
                    </h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      Bigg Boss contestants rarely go on screen without a considered look.{' '}
                      <Link href="/stores/nykaa-coupon-code" className="text-[#5B4FBE] font-bold hover:underline">
                        Nykaa coupons
                      </Link>{' '}
                      cover makeup, skincare, and hair — the closest you'll get to replicating what you see on screen without a professional makeup artist.
                    </p>
                  </div>
                </div>

                {/* SECTION 5: Frequently Asked Questions */}
                <div id="faqs" className="space-y-5 pt-4 border-t border-gray-200">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E] flex items-center gap-2.5">
                    <HelpCircle className="w-7 h-7 text-[#5B4FBE]" />
                    <span>Frequently Asked Questions</span>
                  </h2>

                  <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                      <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E8E8F0] shadow-xs space-y-2">
                        <h3 className="text-base font-bold text-[#1A1A2E]">{faq.q}</h3>
                        <p className="text-sm text-[#4A4A6A] leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Closing Paragraph */}
                <div className="bg-[#F0EEFF] rounded-2xl p-6 sm:p-8 border border-[#5C3BCC]/20 space-y-3">
                  <p className="text-sm sm:text-base text-[#1A1A2E] leading-relaxed font-medium">
                    Bigg Boss 20 is already the most-talked-about show of the September 2026 season — between the &quot;Vardaan&quot; format twist, a cast that spans boxing legend Mary Kom to content creators with tens of millions of followers, and Salman Khan at his 20th-season best, there's good reason for that. Set up your viewing nights well: the right food deal, the right OTT plan, and maybe something from the{' '}
                    <Link href="/stores/categories/entertainment" className="text-[#5B4FBE] font-bold underline">
                      Entertainment deals page
                    </Link>{' '}
                    to keep the savings going through the full season run.
                  </p>
                </div>

              </div>

            </article>

            {/* SIDEBAR WIDGETS */}
            <aside className="lg:col-span-4 space-y-6">

              {/* Widget 0: Table of Contents */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-[#1A1A2E] uppercase tracking-wide border-b border-[#E8E8F0] pb-3">
                  Table of Contents
                </h3>
                <nav>
                  <ol className="space-y-2 text-sm">
                    <li>
                      <a href="#where-to-watch" className="flex items-start gap-2 text-[#5B4FBE] hover:underline font-medium">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-bold flex items-center justify-center mt-0.5">1</span>
                        Where to Watch Bigg Boss 20
                      </a>
                    </li>
                    <li>
                      <a href="#contestants" className="flex items-start gap-2 text-[#5B4FBE] hover:underline font-medium">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-bold flex items-center justify-center mt-0.5">2</span>
                        Bigg Boss 20 Contestants
                      </a>
                    </li>
                    <li>
                      <a href="#jiohotstar-cost" className="flex items-start gap-2 text-[#5B4FBE] hover:underline font-medium">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-bold flex items-center justify-center mt-0.5">3</span>
                        How Much Does JioHotstar Cost?
                      </a>
                    </li>
                    <li>
                      <a href="#save-more" className="flex items-start gap-2 text-[#5B4FBE] hover:underline font-medium">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-bold flex items-center justify-center mt-0.5">4</span>
                        Save More on Your BB20 Nights
                      </a>
                    </li>
                    <li>
                      <a href="#faqs" className="flex items-start gap-2 text-[#5B4FBE] hover:underline font-medium">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-bold flex items-center justify-center mt-0.5">5</span>
                        Frequently Asked Questions
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>

              {/* Widget 1: Savings Guarantee */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-xs sticky top-24 space-y-5">
                <h3 className="text-sm font-bold text-[#1A1A2E] uppercase tracking-wide border-b border-[#E8E8F0] pb-3">
                  Bigg Boss Savings Guide
                </h3>

                <ul className="space-y-3.5 text-sm text-[#4A4A6A]">
                  <li className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span>Manually verified promo codes for food, OTT &amp; fashion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Tag size={18} className="text-[#FF5722] shrink-0 mt-0.5" />
                    <span>Instant coupon codes for Zepto, Blinkit, Domino's &amp; Nykaa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Tv size={18} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span>Updated daily during the entire BB20 season run.</span>
                  </li>
                </ul>

                <Link
                  href="/stores"
                  className="w-full bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white text-sm font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Explore All 500+ Stores</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Widget 2: Featured Deals */}
              <div className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] rounded-2xl p-6 text-white shadow-md space-y-4">
                <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-[#FFD700]">
                  🔥 Tonight's Specials
                </div>
                <h3 className="font-extrabold text-lg text-white">
                  Get Food &amp; Fashion Deals for BB20 Nights
                </h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  Browse today's verified discount codes across Zepto, Swiggy, Myntra &amp; JioHotstar streaming packs.
                </p>
                <Link
                  href="/deals-of-the-day"
                  className="w-full bg-[#FF5722] hover:bg-orange-600 text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>View Today's Best Deals</span>
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
