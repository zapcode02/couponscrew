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
  Check,
  ExternalLink,
  Award,
  Sparkles,
  Droplet,
  Sun,
  Leaf
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const AFFILIATE_URL = 'https://amzn.to/4oRAEV3';

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

export default function MinimalistKitPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const productImages = [
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162150/51VX_QeZjRL._SY450__mhxhvl.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162170/71ON3mGmKML._SY450__d78hrn.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162025/71ON3mGmKML._SY450__nfo76g.jpg',
  ];

  const specifications = [
    { key: 'Brand', value: 'Minimalist' },
    { key: 'Item Form', value: 'Cream' },
    { key: 'Scent', value: 'Unscented' },
    { key: 'Skin Type', value: 'All Skin Types' },
    { key: 'Product Benefits', value: 'Anti-Acne, Brightening, Dark Spot Correction' },
    { key: 'Key Actives', value: 'Glycolic Acid (7%), Alpha Arbutin (2%)' },
    { key: 'Sunscreen', value: 'SPF 50, PA++++' },
    { key: 'Use By', value: '01 Jul 2027' },
    { key: 'Net Quantity', value: '180g (Combo)' },
    { key: 'Return Policy', value: 'Non-Returnable' }
  ];

  const keyFeatures = [
    'Daily Cleanser with 7% Alpha Lipoic Acid & Glycolic Acid to Exfoliate & Brighten',
    '2% Alpha Arbutin Serum — 9x More Effective Than Beta Arbutin for Even Tone',
    'Contains Butylresorcinol to Help Reduce Hyperpigmentation & Age Spots',
    'SPF 50 PA++++ Broad-Spectrum Sunscreen, Light & Non-Shiny Finish',
    'Visible Even-Tone Results in Around 5 Weeks of Regular Use',
    'Ingredients Sourced from Chemours (USA) & Alfa Aesar (USA)',
    'Lightweight, Non-Greasy & Fast Absorbing Textures'
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
          <span className="text-[#5B4FBE] font-semibold">Minimalist Anti-Pigmentation Kit</span>
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
                  <img src={img} alt={`Minimalist Anti-Pigmentation Kit Thumbnail ${i + 1}`} className="w-full h-full object-contain mix-blend-multiply rounded-lg" />
                </button>
              ))}
            </div>

            {/* Main Image Display Box */}
            <div className="flex-1 bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl aspect-square flex items-center justify-center p-6 relative overflow-hidden group">
              {/* Discount Stamp badge */}
              <div className="absolute top-4 left-4 bg-[#FF5722] text-white text-[11px] font-black px-3 py-1 rounded-lg shadow-sm tracking-wide select-none uppercase">
                12% OFF
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
                alt="Minimalist Anti-Pigmentation Kit"
                className="max-h-[90%] max-w-[90%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT: Product Details Column */}
          <div className="lg:col-span-6 text-left space-y-5">
            <span className="bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider select-none">
              Skincare Combo
            </span>

            <div className="space-y-2">
              <h1 className="text-3xl font-black text-[#1A1A2E] leading-tight">
                Minimalist Anti-Pigmentation Kit
              </h1>
              <p className="text-sm font-semibold text-gray-400">
                Face Wash, Serum & Sunscreen Combo, 180g
              </p>
            </div>

            {/* Rating Stars section */}
            <div className="flex items-center gap-4 select-none">
              <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-3 py-1 rounded-full text-xs font-bold border border-[#FFE7B3]">
                <Star size={14} className="fill-current" />
                <span>4.1 / 5</span>
              </div>
              <span className="text-xs text-gray-400 font-semibold">(306 Ratings)</span>
              <span className="text-xs text-gray-400 font-semibold">|</span>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100 uppercase">100+ Bought This Month</span>
            </div>

            {/* Price section */}
            <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none block">Best Deal Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#1A1A2E]">₹1,147</span>
                  <span className="line-through text-sm text-gray-400 font-medium">₹1,299</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-emerald-600 font-black tracking-widest uppercase block">Total Savings</span>
                <span className="text-base font-black text-emerald-600">Save ₹152 (12%)</span>
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
                <span>Top Brand</span>
              </div>
            </div>

            <p className="text-xs text-[#4A4A6A] leading-relaxed">
              The Minimalist Anti-Pigmentation Kit combines a daily cleanser with 7% Alpha Lipoic & Glycolic Acid, a 2% Alpha Arbutin serum, and an SPF 50 PA++++ sunscreen to help fade dark spots and even out skin tone. Designed for daily use, this combo is lightweight, unscented, and suitable for all skin types looking to tackle uneven pigmentation. Note: this item is non-returnable.
            </p>

            {/* Row of Icon Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'Alpha Arbutin', icon: Sparkles, desc: 'Reduces Dark Spots' },
                { label: 'Niacinamide', icon: Droplet, desc: 'Even Skin Tone' },
                { label: 'SPF 50 PA++++', icon: Sun, desc: 'Daily Protection' },
                { label: 'Fragrance-Free', icon: Leaf, desc: 'Gentle on Skin' }
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

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
  {/* Get Deal Button */}
  <a
    href={AFFILIATE_URL}
    target="_blank"
    rel="noopener noreferrer nofollow sponsored"
    className="w-full sm:flex-1 h-14 bg-[#FF5722] hover:bg-orange-600 text-white rounded-2xl font-black text-sm tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98]"
  >
    <ExternalLink size={18} />
    <span>GET THIS DEAL ON AMAZON</span>
  </a>

  {/* Google Preferred Badge */}
  <a
    href="https://www.google.com/preferences/source?q=couponscrew.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto h-14 flex justify-center items-center hover:opacity-90 transition-opacity active:scale-[0.98] shrink-0"
  >
    <img
      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788011120/google-preferred-sources-561_m6yj79.webp"
      alt="Google Preferred Source"
      className="h-full w-auto object-contain"
    />
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
              <h4 className="text-lg font-black text-[#1A1A2E]">Top Brand on Amazon</h4>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                This kit is fulfilled and delivered by Amazon with secure transaction protection. Please note this item is non-returnable, so check skin type compatibility before ordering.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Content */}

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

              {/* Left: Text Content */}
              <div className="prose max-w-none">
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  Minimalist Skincare Kit — Complete Anti-Pigmentation Review & Deal Guide
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">What Is This Skincare Kit?</h3>
                  <p>
                    Hyperpigmentation is stubborn. A single product won't fix it — and most brands know that, which is why they keep selling you one product at a time. Minimalist built a three-step kit instead. This is a ₹999 routine doing the work of a ₹3,000 dermatologist-recommended system.
                  </p>
                  <p>
                    Three products, three jobs. The face wash uses 7% Alpha Lipoic Acid and Glycolic Acid to exfoliate dead skin and accelerate cell turnover. The serum delivers 2% Alpha Arbutin — nine times more potent than Beta Arbutin — to block melanin production at the source. The SPF 50 PA++++ sunscreen blocks 98% of UVB rays and prevents UV from re-triggering pigmentation every morning. Together: exfoliation, inhibition, protection. That's the system.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">How Each Product Works — Ingredients Explained</h3>
                    <p><strong>Alpha Lipoic + Glycolic 07% Cleanser:</strong> Glycolic Acid dissolves the bonds between dead skin cells — no scrubbing required. Alpha Lipoic Acid (ALA) is a universal antioxidant, both water and fat-soluble, that neutralises UV-generated free radicals and recycles vitamins C and E in your skin. Vitamin B5 and Allantoin keep it gentle despite the acid content. At pH 3.5–4.5, the Glycolic is fully active even in a rinse-off format — you get the exfoliation without the sustained contact risk of a leave-on AHA.</p>
                    <p><strong>Alpha Arbutin Serum Kit (02%):</strong> Alpha Arbutin inhibits tyrosinase — the enzyme that triggers melanin synthesis — without destroying melanocytes. It corrects tone without bleaching. At 2% concentration with Butylresorcinol (20x more potent than Kojic Acid) and Ferulic Acid for antioxidant backup, this is one of the most active OTC pigmentation treatments in India. Sodium Hyaluronate keeps it hydrating.</p>
                    <p><strong>Multi-Vitamin SPF 50 PA++++ Sunscreen:</strong> Four UV filters — Avobenzone, Octocrylene, Uvinul T 150 (BASF Germany), Titanium Dioxide — delivering independently tested SPF 56.6 (ISO 24444:2019). PA++++ is the highest UVA protection grade. Niacinamide in the formula actively fades existing spots while the sunscreen blocks new ones. Fragrance-free, no white cast, dewy finish. (SPF 50 PA++++ is not decorative — if you're using a brightening serum and skipping sunscreen, you're undoing the serum's work every single morning.)</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-8">Your Daily Routine — How to Use This Kit</h3>
                    <p className="text-gray-700 font-bold -mt-4">Three products. Two minutes. Morning and night.</p>
                    <div className="space-y-6">
                      {[
                        "Morning & Night — Cleanser: Wet your face, apply a small amount of the Alpha Lipoic + Glycolic Cleanser, massage gently for 30–60 seconds, rinse. Pat dry.",
                        "Morning & Night — Serum: Apply 2–3 drops onto towel-dried skin. Gentle upward circles. Wait 60–90 seconds for full absorption before the next step.",
                        "Morning Only — Sunscreen: Apply generously as the final step, 15 minutes before going outdoors. Reapply every 2 hours if you're outside. Not optional.",
                        "Night only (optional): If your skin runs dry, add a lightweight moisturiser after the serum. The kit doesn't include one — use whatever you already own.",
                        "Consistency is everything. Results from Alpha Arbutin take 4 weeks for tanning and 8 weeks for deeper pigmentation. That means every morning, every night. Not 'most days'. Every day."
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <div className="w-10 h-10 shrink-0 bg-[#5B4FBE] text-white font-black rounded-2xl flex items-center justify-center shadow-lg shadow-teal-100 italic">
                            {i + 1}
                          </div>
                          <p className="text-gray-700 font-bold leading-relaxed mt-2">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Pros & Cons — An Honest Assessment</h3>
                    <p><strong>What works well:</strong> Clinically backed actives at concentrations that actually work — not decorative amounts. The Glycolic Acid cleanser improves texture within a few weeks. The Alpha Arbutin + Butylresorcinol serum is among the most potent OTC pigmentation formulas in India. The sunscreen is genuinely good daily-wear — no white cast, non-shiny, niacinamide-infused. The SPF is independently tested at 56.6. That's not a marketing number, that's a lab result.</p>
                    <p><strong>What to know before buying:</strong> Some users experience temporary dryness in the first 2–3 weeks while skin adjusts to Glycolic Acid — normal, it resolves. A moisturiser is not included; budget for one. The sunscreen needs reapplication every 2 hours outdoors, not just once in the morning. This kit is non-returnable on Amazon India — patch test before committing. Results take time. This is not a quick fix.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Who Should Buy This Kit</h3>
                    <p>If you're looking for an anti pigmentation kit for face concerns — post-acne marks, sun tanning, uneven tone, or early melasma — this kit is built for your specific problem. It works across skin types: dry, oily, combination, sensitive, acne-prone. All three products are fragrance-free. India's year-round UV intensity makes the SPF non-optional; this kit builds that into the routine from day one.</p>
                    <p>New to actives? The cleanser introduces AHAs in a low-risk rinse-off format. The serum is beginner-friendly. The sunscreen doubles as your morning base in humid climates. (If you're nervous about irritation — start with the serum every other day for the first week. Let your skin adjust before going daily.)</p>
                    <p className="text-gray-700 font-bold"><strong>Important:</strong> Pregnant or breastfeeding women should consult a dermatologist before using this kit. The sunscreen contains Octocrylene, which is not recommended during pregnancy.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">About the Minimalist Brand</h3>
                    <p>Minimalist was founded in October 2020 by Mohit Yadav and Rahul Yadav in Jaipur. Their whole principle is #HideNothing — exact active concentrations, sourcing details, clinical data, all listed on the packaging. No proprietary blend labels, no vague "complex" names hiding 0.01% actives.</p>
                    <p>₹100 crore in revenue within 8 months of launch. ₹347 crore by 2024. In March 2025, HUL acquired a 90.5% stake for ₹2,955 crore — the largest DTC skincare exit in Indian startup history. HUL paying ₹2,955 crore for a 4-year-old brand is the most straightforward validation a skincare company can get. That's not marketing — that's a conglomerate betting billions on a formula.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Buy via CouponsCrew</h3>
                    <p>Minimalist runs real sales during Amazon Great Indian Festival and festive seasons — not inflated-MRP tricks, actual price drops. We track these for this alpha arbutin serum kit and flag the best window. The deal button links to the current live price. Check the cart page — sometimes a coupon tick applies that's easy to miss. Free to use, no registration.</p>
                  </div>

                  {!isReadMore && (
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none" />
                  )}
                </div>

                <button
                  onClick={() => setIsReadMore(!isReadMore)}
                  className="mt-10 flex items-center gap-2 text-[#0344b0] font-black text-xs uppercase tracking-widest hover:underline"
                >
                  {isReadMore ? "Read Less" : "Read More"} <ChevronDown className={cn("w-4 h-4 transition-transform", isReadMore && "rotate-180")} />
                </button>

                {/* FAQs Accordion */}
                <div className="mt-20 space-y-4">
                  <h3 className="text-2xl font-black text-black mb-8">Frequently Asked Questions</h3>
                  {[
                    { q: "What is the Minimalist Anti-Pigmentation Kit?", a: "Three products: 7% Alpha Lipoic + Glycolic Acid face wash (100ml), 2% Alpha Arbutin serum (30ml), SPF 50 PA++++ multi-vitamin sunscreen (50g). Together they exfoliate dead skin, block melanin production, and protect against UV — targeting dark spots, acne marks, sun tan, and uneven tone as a system, not three separate purchases." },
                    { q: "Is this kit suitable for all skin types?", a: "Yes — fragrance-free, non-comedogenic, essential oil-free across all three products. Works for dry, oily, combination, sensitive, and acne-prone skin. If your barrier is compromised or you have active inflammatory conditions, patch test first. Not recommended for pregnant or breastfeeding women due to Octocrylene in the sunscreen." },
                    { q: "How long does it take to see results?", a: "93% of users noticed reduced sun tanning in 4 weeks; 90% noticed reduced hyperpigmentation in 8 weeks (Minimalist consumer study). Sun tanning responds fastest. Melasma and deep PIH take longer. The SPF is doing protective work from day one — which is non-negotiable if you're treating pigmentation." },
                    { q: "Where can I find Minimalist coupon codes?", a: "CouponsCrew tracks pricing on this anti pigmentation kit for face and body — Great Indian Festival and seasonal events bring real price drops. The deal button links to the current best offer. Check the Amazon cart page — sometimes a coupon tick applies that's easy to miss." },
                    { q: "Does the kit include sun protection?", a: "Yes — this is a pigmentation kit with sunscreen rated SPF 50 PA++++ and independently tested at SPF 56.6 (ISO 24444:2019). PA++++ is the highest UVA grade. Apply every morning as your last step, 15 minutes before outdoors. Reapply every 2 hours outside — a single application is not sufficient for all-day protection." },
                    { q: "Is CouponsCrew free to use?", a: "Completely free. No login. No premium tier. Just verified deals." }
                  ].map((faq, i) => (
                    <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-[#f0f0f0] shadow-sm transition-all duration-300">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#fcfcfc] transition-colors"
                      >
                        <span className="text-black font-black text-base">{faq.q}</span>
                        <div className={cn("bg-[#f0f0f0] p-2 rounded-xl transition-all", openFaq === i && "bg-[#5B4FBE] rotate-180")}>
                          <ChevronDown className={cn("w-4 h-4 text-gray-500", openFaq === i && "text-white")} />
                        </div>
                      </button>
                      <div className={cn("overflow-hidden transition-all duration-300 px-8 bg-white", openFaq === i ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0")}>
                        <p className="text-gray-500 font-bold text-sm leading-relaxed pt-2 border-t border-[#f0f0f0]">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-10">
                <div className="bg-[#e8f6f8] rounded-[40px] p-10 border border-[#5B4FBE]/5">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Minimalist Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Anti-Pigmentation Kit", "Alpha Arbutin 2% Serum", "Glycolic Acid Cleanser", "SPF 50 PA++++ Sunscreen", "Minimalist Skincare", "Dark Spot Removal", "Hyperpigmentation Treatment", "CouponsCrew Beauty Deals"].map(tag => (
                      <a
                        key={tag}
                        href={`/search?q=${encodeURIComponent(tag)}`}
                        className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#5B4FBE] uppercase tracking-widest shadow-sm hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-95 border border-white"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-[40px] p-10 border-2 border-[#f0f0f0] shadow-sm">
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Minimalist Deals</h3>
                  <div className="space-y-6">
                    {[
                      { heading: "Anti-Pigmentation Kit Combo", sub: "Complete 3-step routine — cleanser, serum & SPF 50 at best deal price" },
                      { heading: "Alpha Arbutin 2% Serum", sub: "Standalone dark-spot serum — 9x more effective than Beta Arbutin" },
                      { heading: "Glycolic Acid Cleanser", sub: "Daily AHA face wash for brighter, even skin tone" },
                      { heading: "SPF 50 PA++++ Sunscreen", sub: "Maximum UVA+UVB protection with Niacinamide — non-greasy finish" },
                      { heading: "Minimalist Skincare Bundle", sub: "Stack multiple Minimalist actives for enhanced pigmentation results" }
                    ].map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">M</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Minimalist deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
                      </div>
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
