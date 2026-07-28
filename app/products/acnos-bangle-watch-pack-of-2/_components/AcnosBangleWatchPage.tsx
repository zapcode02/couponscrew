'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  Star,
  ShieldCheck,
  Truck,
  Heart,
  Check,X, ArrowRight, Info, Tag,
  ExternalLink,
  Award,
  Gem,
  Watch,
  Gift,
  Sparkles
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const AFFILIATE_URL = 'https://amzn.to/4gbffUx';

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

export default function AcnosBangleWatchPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const productImages = [
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162305/41oui_xq1PL_zndlwz.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162311/61oV5yd64nL._SX569__p91qpd.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162313/61Ixt1eEdjL._SY741__oqpz6j.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162313/41POC0fPN6L_kwgjjl.jpg',
  ];

  const specifications = [
    { key: 'Brand', value: 'Acnos' },
    { key: 'Case Diameter', value: '4 Millimetres' },
    { key: 'Band Colour', value: 'Rosegold/D-White' },
    { key: 'Band Material', value: 'Stainless Steel' },
    { key: 'Watch Movement', value: 'Quartz' },
    { key: 'Warranty Type', value: 'Manufacturer (1 Year)' },
    { key: 'Item Weight', value: '250 Grams' },
    { key: 'Water Resistance', value: '30 Metres' },
    { key: 'Net Quantity', value: '2.00 Count' },
    { key: 'Country of Origin', value: 'India' }
  ];

  const keyFeatures = [
    '1 Year Manufacturer Warranty Included',
    'Quartz Movement, Analog Display, Stainless Steel Band',
    'Premium Quality Build with 30-Metre Water Resistance',
    'Comfortable Band Fits Most Wrists, Secures Easily',
    'Comes in a Beautiful Gift Box — Ideal for Gifting',
    'No Bezel, Round Case, Designed for Girls',
    'Pack of 2 — Mix & Match Styles Daily'
  ];

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 w-full flex-1">

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-[#4A4A6A] select-none mb-6">
          <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
          <ChevronRight size={14} className="text-gray-400" />
          <Link href="/products" className="hover:text-[#5B4FBE] transition-colors font-medium">Products</Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-[#5B4FBE] font-semibold">Acnos Bangle Watch, Pack of 2</span>
        </div>

        {/* Hero Section Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm mb-10">

          {/* LEFT: Image Gallery Column */}
          <div className="lg:col-span-6 flex flex-col-reverse lg:flex-row gap-4">
            {/* Gallery Thumbnails List */}
            <div className="flex flex-row lg:flex-col gap-3 shrink-0 justify-center lg:justify-start">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`w-14 h-14 rounded-xl border-2 bg-[#F8F8FF] overflow-hidden p-1 transition-all ${activeImageIndex === i ? 'border-[#5B4FBE]' : 'border-[#E8E8F0] hover:border-gray-300'
                    }`}
                >
                  <img src={img} alt={`Acnos Bangle Watch Thumbnail ${i + 1}`} className="w-full h-full object-contain mix-blend-multiply rounded-lg" />
                </button>
              ))}
            </div>

            {/* Main Image Display Box */}
            <div className="flex-1 bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl aspect-square flex items-center justify-center p-6 relative overflow-hidden group">
              {/* Discount Stamp badge */}
              <div className="absolute top-4 left-4 bg-[#FF5722] text-white text-[11px] font-black px-3 py-1 rounded-lg shadow-sm tracking-wide select-none uppercase">
                85% OFF
              </div>

              {/* Wishlist Icon Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 bg-white hover:bg-opacity-95 text-[#EF4444] rounded-full p-2.5 shadow-md cursor-pointer z-10 transition-transform active:scale-90"
              >
                <Heart size={18} className={isWishlisted ? 'fill-[#EF4444] text-[#EF4444]' : 'text-gray-400'} />
              </button>

              <img
                src={productImages[activeImageIndex]}
                alt="Acnos Bangle Watch, Pack of 2"
                className="max-h-[90%] max-w-[90%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT: Product Details Column */}
          <div className="lg:col-span-6 text-left space-y-5">
            <span className="bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider select-none">
              Fashion Watch
            </span>

            <div className="space-y-2">
              <h1 className="text-3xl font-black text-[#1A1A2E] leading-tight">
                Acnos Premium Girl's Heart Shape Bangle Watch, Pack of 2
              </h1>
              <p className="text-sm font-semibold text-gray-400">
                Analog Bangle Watch Combo for Girls & Women
              </p>
            </div>

            {/* Rating Stars section */}
            <div className="flex items-center gap-4 select-none">
              <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-3 py-1 rounded-full text-xs font-bold border border-[#FFE7B3]">
                <Star size={14} className="fill-current" />
                <span>4.0 / 5</span>
              </div>
              <span className="text-xs text-gray-400 font-semibold">(2,326 Ratings)</span>
              <span className="text-xs text-gray-400 font-semibold">|</span>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100 uppercase">400+ Bought This Month</span>
            </div>

            {/* Price section */}
            <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none block">Best Deal Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#1A1A2E]">₹299</span>
                  <span className="line-through text-sm text-gray-400 font-medium">₹1,999</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-emerald-600 font-black tracking-widest uppercase block">Total Savings</span>
                <span className="text-base font-black text-emerald-600">Save ₹1,700 (85%)</span>
              </div>
            </div>

            {/* Availability details */}
            <div className="flex items-center gap-6 py-1 select-none">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A1A2E]">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full inline-block animate-pulse"></span>
                <span>In Stock</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                <Truck size={16} className="text-[#5B4FBE]" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                <ShieldCheck size={16} className="text-[#5B4FBE]" />
                <span>10 Days Returnable</span>
              </div>
            </div>

            <p className="text-xs text-[#4A4A6A] leading-relaxed">
              The Acnos Premium Girl's Heart Shape Bangle Analog Watch comes as a pack of 2, letting you mix and match styles for any occasion. Featuring an elegant heart-shaped dial and an adjustable bangle cuff design, these watches combine fashion with functionality, making them a great gifting option for girls and women alike. Backed by a 1-year manufacturer warranty.
            </p>

            {/* Row of Icon Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'Heart Shape Dial', icon: Gem, desc: 'Elegant Design' },
                { label: 'Pack of 2', icon: Watch, desc: 'Mix & Match' },
                { label: 'Bangle Cuff', icon: Sparkles, desc: 'Adjustable Fit' },
                { label: 'Gift Ready', icon: Gift, desc: 'Great for Gifting' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-[#F8F9FC] border border-slate-100 rounded-2xl p-3 text-center flex flex-col items-center justify-center space-y-1">
                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-[#5B4FBE] shadow-xs">
                      <Icon size={16} />
                    </div>
                    <span className="text-[11px] font-black text-[#1A1A2E] leading-none pt-1">{item.label}</span>
                    <span className="text-[9px] text-gray-400 font-semibold leading-none">{item.desc}</span>
                  </div>
                );
              })}
            </div>

            {/* GET DEAL CTA block */}
            <div className="pt-2">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="w-full bg-[#FF5722] hover:bg-orange-600 text-white py-4 rounded-2xl font-black text-sm tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98]"
              >
                <ExternalLink size={16} />
                <span>GET THIS DEAL ON AMAZON</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features & Specs & Warranty Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">

          {/* Key Features */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col">
            <h3 className="text-lg font-black text-[#1A1A2E] mb-6 uppercase tracking-wider border-b border-gray-100 pb-3">
              Key Features
            </h3>
            <ul className="space-y-4 flex-1">
              {keyFeatures.map((feat, i) => (
                <li key={i} className="flex gap-3 items-start text-left text-xs font-semibold text-gray-500">
                  <Check size={16} className="text-emerald-500 shrink-0 stroke-[3]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Specifications */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col">
            <h3 className="text-lg font-black text-[#1A1A2E] mb-6 uppercase tracking-wider border-b border-gray-100 pb-3">
              Product Specifications
            </h3>
            <div className="divide-y divide-gray-100 flex-1">
              {specifications.map((spec, i) => (
                <div key={i} className="flex justify-between items-center py-2.5 text-xs">
                  <span className="text-gray-400 font-bold">{spec.key}</span>
                  <span className="text-[#1A1A2E] font-black text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty Block */}
          <div className="lg:col-span-3 bg-indigo-50/30 rounded-3xl p-6 md:p-8 border border-[#5B4FBE]/5 shadow-sm flex flex-col justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-[#5B4FBE] text-white flex items-center justify-center mx-auto shadow-md">
              <Award size={32} />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-black text-[#1A1A2E]">1 Year Warranty</h4>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                Covered by a 1-year manufacturer warranty against manufacturing defects, plus a 10-day return window. Contact Acnos support for quick processing.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Content */}

       <section className="py-12 md:py-16 bg-slate-50/60 text-slate-800">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-12 items-start">
      
      {/* LEFT COLUMN: Main Content */}
      <div className="space-y-10">

        {/* Product Overview */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-[#5B4FBE] font-bold text-xs uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" /> Product Overview
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
            Acnos Bangle Watch — Two Watches at ₹299. Yes, Both.
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              Two bangle watches. One Rosegold, one D-White. Both heart-shaped dials. Both with a 1-year warranty. ₹299 for the pair. That works out to ₹149.50 per watch, in case your brain needed a moment with those numbers.
            </p>
            <p>
              The Acnos Premium Girl's Heart Shape Bangle Watch is built around a stainless steel cuff that sits on the wrist like a bracelet — which means you're not choosing between a watch and an accessory, you're wearing both at the same time. The heart-shaped dial is what makes this stand out from the sea of identical round-face fashion watches at this price point. It's a small detail that reads as intentional, which is exactly what you want when gifting something.
            </p>
            <p>
              Acnos is an Indian fashion accessories brand. This specific pack has crossed 2,300 ratings on Amazon India and 400+ buyers picked it up last month alone. At ₹299 for two watches with quartz movement and 30-metre water resistance, it's covering hand-washing and light rain — which, honestly, is all most fashion watches ever face. The MRP is listed at ₹1,999 — that's an 85% discount. We're not going to pretend the MRP is a price anyone was ever paying, but ₹299 for this pack is genuinely good value.
            </p>
          </div>
        </div>

        {/* Key Features & Specifications */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">
              Key Features & Specifications
            </h3>
            <p className="text-slate-500 text-sm">
              Everything that matters about this watch, no fluff:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              { label: "Brand", val: "Acnos — Indian fashion accessories brand" },
              { label: "Pack contents", val: "2 analog bangle watches (Rosegold + D-White)" },
              { label: "Dial shape", val: "Heart shape watch face — stands out from every round-face competitor" },
              { label: "Band material", val: "Stainless Steel bangle cuff — wears like jewellery" },
              { label: "Watch movement", val: "Quartz — accurate, battery-powered, zero maintenance" },
              { label: "Water resistance", val: "30 metres — handles rain and hand-washing, not swimming" },
              { label: "Case diameter", val: "4 mm slim profile — sits flat on the wrist" },
              { label: "Weight", val: "250 g combined (roughly 125 g each)" },
              { label: "Warranty", val: "1 year manufacturer warranty — rare at this price" },
              { label: "Country of origin", val: "India" },
              { label: "Return policy", val: "10-day returnable via Amazon India" },
            ].map((spec, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-slate-900">{spec.label}: </span>
                  <span className="text-slate-600">{spec.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Buy via CouponsCrew */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="text-xl font-extrabold text-slate-900">
            Why Buy via CouponsCrew
          </h3>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              Most coupon sites list expired codes from 2019 and hope you don't notice. We verify before we publish. Every deal on CouponsCrew links directly to the live Amazon India listing — no inflated before-prices, no redirects through three middlemen, no checkout surprises. What you see is what you get.
            </p>
            <p>
              We also check for coupon ticks — Amazon sometimes applies an additional discount at the cart stage that isn't visible on the product page. It's easy to miss if you're not looking. We flag these when they exist. The whole platform is free. No registration. No "premium tier." Just deals that actually work.
            </p>
          </div>
        </div>

        {/* Current Deal & Offer Details */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="text-xl font-extrabold text-slate-900">
            Current Deal & Offer Details
          </h3>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              Right now, this Acnos bangle watch is at ₹299 — 85% off the listed MRP of ₹1,999 on Amazon India. CouponsCrew tracks this price daily. If it drops further, the deal button above will take you to the updated offer automatically.
            </p>

            <div className="bg-amber-50/80 border border-amber-200/80 p-4 rounded-xl flex items-start gap-3 my-4 text-amber-900 text-sm">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p>
                Amazon prices move without warning. Click the deal button to confirm the live price before adding to cart — what you see on CouponsCrew is verified, but always worth a final check at checkout.
              </p>
            </div>

            <p>
              Also check the cart page before completing your order. Amazon sometimes applies an additional coupon tick at checkout — an extra 5–10% that doesn't show on the product page. It's the kind of thing you'd only find if someone told you to look. (We're telling you to look.) Free delivery applies for Prime members and for most pincodes on orders above the standard threshold.
            </p>
          </div>
        </div>

        {/* How to Avail This Deal — Redemption Steps */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">
              How to Get This Deal — Takes About 90 Seconds
            </h3>
            <p className="text-slate-500 text-sm">
              No coupon code needed. The discount is already applied on Amazon. Here's how to lock it in:
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Click \"GET THIS DEAL ON AMAZON\" above. You'll land directly on the live Amazon India listing.",
              "Check the product page for any active coupon tick — there's sometimes a checkbox above the price for an extra 5–10% off. Tick it if it's there.",
              "Select your variant if prompted, then click \"Add to Cart\" or \"Buy Now.\"",
              "Sign in to your Amazon India account. If you have an HDFC, SBI, ICICI, or Axis Bank card, check the offers tab at payment — bank card discounts sometimes stack on fashion orders.",
              "Complete checkout. ₹299 (or less if a coupon tick applied) will be the final price."
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-[#5B4FBE] text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {i + 1}
                </div>
                <p className="text-slate-700 text-sm font-medium pt-1 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">
              Pros & Cons — Honest Version
            </h3>
            <p className="text-slate-500 text-sm">
              What this pack genuinely does well, and what it doesn't pretend to be:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="bg-emerald-50/50 border border-emerald-100 p-5 rounded-xl space-y-3">
              <h4 className="font-extrabold text-emerald-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Pros
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Two watches for ₹299 — works out to under ₹150 each",
                  "Heart-shaped dial is actually different from the crowd",
                  "Bangle cuff means no separate bracelet needed",
                  "Quartz movement — keeps accurate time, no winding",
                  "1-year manufacturer warranty — rare at this price point",
                  "Ships in a gift box. Zero extra effort on presentation."
                ].map((pro, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-rose-50/50 border border-rose-100 p-5 rounded-xl space-y-3">
              <h4 className="font-extrabold text-rose-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> Cons
              </h4>
              <ul className="space-y-2.5">
                {[
                  "30m water resistance means light splashes, not swimming — it's a fashion watch, not a diver",
                  "Bangle cuff fits most wrists but isn't adjustable the same way a strap is",
                  "No smartwatch features — this is purely analog, purely fashion",
                  "The MRP of ₹1,999 is not a price anyone was ever paying. The real deal is ₹299."
                ].map((con, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Who Should Buy This — Use Cases */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="text-xl font-extrabold text-slate-900">
            Who Should Buy This
          </h3>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <p>
              If you're shopping for a girls bangle watch and want variety without spending ₹1,000+ — this pack solves that. Keep the Rosegold for casual days, the D-White for college or office. Both work with kurtas, western wear, and everything in between. The bangle cuff means no extra bracelet needed.
            </p>
            <p>
              It's also one of the better gift options under ₹500, honestly. The heart dial makes it feel like someone thought about the gift rather than just grabbing the first watch they saw. The branded box means you don't need to spend extra on wrapping. Good for birthdays, Valentine's Day, Raksha Bandhan, Diwali, or the "I forgot it's her birthday tomorrow" situation. (We don't judge. The 2-day delivery option exists for a reason.)
            </p>
          </div>
        </div>

        {/* Similar & Alternative Products */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">
              Considering Alternatives? Here's the Honest Comparison
            </h3>
            <p className="text-slate-500 text-sm">
              Other watch types at a similar price — what you gain, what you give up:
            </p>
          </div>

          <div className="space-y-3">
            {[
              { title: "Chain-link bracelet watches", desc: "More durable long-term, usually pricier. You get one watch. The Acnos pack gives you two." },
              { title: "Mesh strap analog watches", desc: "Minimalist look, adjustable fit. Solid option if you prefer a thinner profile over the bangle cuff style." },
              { title: "Leather strap fashion watches", desc: "More formal, classic aesthetic. Usually single-watch purchase at ₹300–₹600. Different look entirely." },
              { title: "Entry-level smartwatches", desc: "Step counter, notifications, always-on display — but starts at ₹1,500+, doesn't look like jewellery, and is harder to gift." }
            ].map((alt, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <ArrowRight className="w-4 h-4 text-[#5B4FBE] shrink-0 mt-1" />
                <div className="text-sm">
                  <span className="font-bold text-slate-900">{alt.title}: </span>
                  <span className="text-slate-600">{alt.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-base leading-relaxed pt-2">
            If you want fashion, variety, and gifting appeal under ₹500 — this heart shape watch pack is the call. Two watches, one purchase, done.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900">
            FAQs — Acnos Bangle Watch
          </h3>

          <div className="space-y-3">
            {[
              { q: "Is this watch good for daily wear?", a: "Yes — a girls bangle watch with quartz movement holds up to daily use, handles hand-washing and light rain at 30m resistance. Fashion wear, not sports — skip the pool." },
              { q: "Does it actually come in a gift box?", a: "Yes. Ships in a branded Acnos box — no extra gift wrapping needed. We verified this from buyer reviews. It's one of the reasons this pack works so well as a last-minute gift." },
              { q: "What does the 1-year warranty cover?", a: "Manufacturing defects from the date of purchase, covered by Acnos directly. Contact Acnos customer support with your Amazon order details to initiate a claim. Damage from misuse or water beyond the 30m rating is not covered." },
              { q: "Can I return it if something's wrong?", a: "Yes — 10-day returnable via Amazon India. If there's a defect or the product doesn't match the listing, raise the return through your Amazon order page. Prime members get free pickup." },
              { q: "Is ₹299 the real price or a fake MRP trick?", a: "The MRP of ₹1,999 is not a price this watch was selling for at scale — we'll be straight about that. But ₹299 for two watches with a 1-year warranty and quartz movement is genuinely good value. Judge it against what you're getting, not the inflated MRP." }
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-slate-200/80 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-slate-900 text-sm hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={cn("w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2", openFaq === i && "rotate-180 text-[#5B4FBE]")} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Categories & Stores */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">
              Related Categories & Stores
            </h3>
            <p className="text-slate-500 text-sm">
              Looking for more deals in similar categories? Explore these sections on CouponsCrew:
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {[
              "Fashion Watches",
              "Watches & Accessories",
              "Gift Ideas for Her",
              "Clothing & Accessories",
              "All Deals",
              "Amazon Store"
            ].map((cat) => (
              <a
                key={cat}
                href={`/category/${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="bg-slate-100 hover:bg-[#5B4FBE] hover:text-white text-slate-700 px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-95"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-slate-100/70 p-5 rounded-2xl border border-slate-200/60 text-xs text-slate-500 space-y-2 leading-relaxed">
          <p className="font-bold text-slate-700 uppercase tracking-wider text-[10px]">
            Affiliate Disclosure
          </p>
          <p>
            CouponsCrew participates in the Amazon Associates Programme. If you buy through our links, we earn a small commission — at no extra cost to you. That commission is what keeps this platform free and the deal tracking running. Product info, images, and pricing come from Amazon India and change without notice. Always confirm the final price at checkout.
          </p>
        </div>

      </div>

      {/* RIGHT COLUMN: Enhanced Sticky Sidebar */}
      <div className="space-y-6 lg:sticky lg:top-8">

        {/* Primary Buy Card Widget */}
        <div className="bg-white rounded-2xl p-6 border-2 border-indigo-100 shadow-md space-y-5 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified Amazon Deal
          </div>

          <div>
            <h4 className="text-slate-900 font-black text-lg">Acnos Bangle Watch (Rosegold & D-White)</h4>
            <p className="text-slate-500 text-xs mt-1">Rosegold + D-White Color Combination</p>
          </div>

          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#5B4FBE] hover:bg-indigo-700 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-indigo-100 active:scale-95"
          >
            <span>GET THIS DEAL ON AMAZON</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <p className="text-[11px] text-slate-400">
            1-Year Warranty • 10-Day Returns • Amazon Fulfilled
          </p>
        </div>

        {/* Quick Specs Highlight Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm space-y-4">
          <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
            At A Glance
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Contents:</span>
              <span className="font-semibold text-right">2 Analog Watches</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Movement:</span>
              <span className="font-semibold text-right">Quartz</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Water Resistance:</span>
              <span className="font-semibold text-right">30 Metres</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Amazon Ratings:</span>
              <span className="font-semibold text-right text-amber-400">2,300+ Ratings</span>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-400">Warranty:</span>
              <span className="font-semibold text-right">1 Year Brand Warranty</span>
            </li>
          </ul>
        </div>

        {/* Trending Store Links */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">
            Popular Categories
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Watch Combo Packs", "Rosegold Watches", "Gifts Under 1000",
              "Amazon Fashion Deals", "Bangle Watches"
            ].map((tag) => (
              <span
                key={tag}
                className="bg-slate-50 text-slate-700 text-xs px-3 py-1.5 rounded-lg border border-slate-200/60 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

      </div>

      <Footer />
    </div>
  );
}
 