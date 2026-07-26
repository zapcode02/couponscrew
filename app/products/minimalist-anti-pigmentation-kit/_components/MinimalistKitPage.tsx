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
                  Minimalist Anti-Pigmentation Kit — Complete Skincare Review & Deal Guide
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">What Is the Minimalist Anti-Pigmentation Kit?</h3>
                  <p>
                    Fighting hyperpigmentation requires more than one product — it demands a system. The Minimalist Anti-Pigmentation Kit brings together three clinically formulated products — a brightening face wash, a targeted serum, and a broad-spectrum sunscreen — designed to work in sequence, morning and night, to fade dark spots, even out skin tone, and prevent new pigmentation from forming.
                  </p>
                  <p>
                    Each product in this kit is built around proven actives at dermatologist-approved concentrations. The face wash uses 7% Alpha Lipoic Acid and Glycolic Acid to exfoliate dead cells and accelerate cell turnover. The serum delivers 2% Alpha Arbutin — nine times more potent than Beta Arbutin — to inhibit melanin production at the source. And the SPF 50 PA++++ sunscreen blocks up to 98% of UVB rays while providing maximum UVA protection to stop UV from re-triggering pigmentation every morning. Together, they address pigmentation from three angles: exfoliation, inhibition, and protection.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">How Each Product Works — Ingredients Explained</h3>
                    <p><strong>Alpha Lipoic + Glycolic 07% Cleanser:</strong> Glycolic Acid chemically dissolves the bonds between dead skin cells without physical scrubbing, revealing brighter skin underneath. Alpha Lipoic Acid (ALA) is a universal antioxidant — both water and fat-soluble — that neutralises UV-generated free radicals and recycles vitamins C and E in your skin. Vitamin B5 and Allantoin keep the formula gentle and moisturising despite the active acid content. At pH 3.5–4.5, the Glycolic Acid is fully active in the rinse-off format, meaning you get exfoliation benefits without the sustained contact risk of a leave-on AHA product.</p>
                    <p><strong>Alpha Arbutin 02% Serum:</strong> Alpha Arbutin is a glycosylated form of hydroquinone, sourced from bearberry plants. It works by competitively inhibiting tyrosinase — the enzyme that triggers melanin synthesis — without destroying melanocytes. This means it corrects tone without bleaching. At 2% concentration with added Butylresorcinol (shown to be 20 times more potent than Kojic Acid in inhibiting tyrosinase) and Ferulic Acid for antioxidant support, this serum is one of the most active pigmentation treatments available without a prescription. Sodium Hyaluronate ensures the formula stays hydrating throughout.</p>
                    <p><strong>Multi-Vitamin SPF 50 PA++++ Sunscreen:</strong> With four UV filters including Avobenzone, Octocrylene, Uvinul T 150 (sourced from BASF, Germany), and Titanium Dioxide, this sunscreen delivers independently verified SPF 56.6 in clinical testing (ISO 24444:2019 standard). PA++++ is the highest possible UVA protection grade. Niacinamide (Vitamin B3) in the formula provides the added benefit of actively fading existing dark spots while the sunscreen prevents new ones. Fragrance-free, non-comedogenic, dewy finish — no white cast.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-8">Your Daily Routine — How to Use This Kit</h3>
                    <p className="text-gray-700 font-bold -mt-4">This three-step routine is designed to be simple enough for daily use, morning and night.</p>
                    <div className="space-y-6">
                      {[
                        "Morning & Night — Cleanser: Wet your face, apply a small amount of the Alpha Lipoic + Glycolic Cleanser, massage into a gentle lather for 30–60 seconds, and rinse thoroughly. Pat dry.",
                        "Morning & Night — Serum: Apply 2–3 drops of the Alpha Arbutin serum onto towel-dried skin. Use gentle upward circular motions. Allow 60–90 seconds for full absorption before the next step.",
                        "Morning Only — Sunscreen: Apply the SPF 50 PA++++ sunscreen generously as the final step. Apply 15 minutes before going outdoors. Reapply every 2 hours during prolonged sun exposure.",
                        "Night Only (Optional Add-On): If your skin tends toward dryness, apply a lightweight moisturiser between the serum and sleep. The kit does not include a moisturiser — it can be added from any brand.",
                        "Consistency is Everything: Results from Alpha Arbutin typically appear in 4 weeks for tanning and 8 weeks for deeper pigmentation. Skipping the sunscreen step undermines all other steps — UV re-triggers melanin daily."
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
                    <p><strong>What works well:</strong> The kit delivers clinically backed actives at concentrations that actually work. The Glycolic Acid cleanser noticeably improves texture within a few weeks. The serum's Alpha Arbutin + Butylresorcinol combination is among the most potent OTC pigmentation-fighting formulas available in India. The sunscreen is legitimately one of the better daily-wear formulas — non-shiny, no white cast, niacinamide-infused. The price point, for this quality of actives, is difficult to match.</p>
                    <p><strong>What to know before buying:</strong> Some users experience temporary dryness or warmth in the first 2–3 weeks as skin adapts to Glycolic Acid and ALA — this is normal and typically resolves. A separate moisturiser is recommended. The sunscreen must be reapplied every 2 hours if you are spending time outdoors, not just applied once in the morning. This kit is non-returnable on Amazon India — patch test before committing. Results require consistent daily use; this is not a quick fix.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Who Should Buy This Kit</h3>
                    <p>The Minimalist Anti-Pigmentation Kit is ideal for anyone dealing with post-acne dark marks, sun tanning, uneven tone, or early-stage melasma. It works across all skin types — dry, oily, combination, sensitive, and acne-prone — and is fragrance-free, making it tolerable for reactive skin. The kit is particularly well suited to people in India, where year-round UV intensity makes broad-spectrum SPF non-negotiable and melanin-related concerns extremely common.</p>
                    <p>If you are new to skincare actives, this kit is a strong starting point — the cleanser introduces AHAs in a low-risk rinse-off format, the serum is beginner-friendly, and the sunscreen doubles as your morning moisturiser in humid climates. If you are an experienced skincare user, this kit delivers prescription-adjacent results at a fraction of the cost, and layers well with other Minimalist actives such as Vitamin C or Niacinamide serums.</p>
                    <p className="text-gray-700 font-bold"><strong>Important:</strong> Pregnant or breastfeeding women should consult a dermatologist before using this kit, as the sunscreen contains Octocrylene, which is not recommended during pregnancy.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">About the Minimalist Brand</h3>
                    <p>Minimalist was founded in October 2020 by brothers Mohit Yadav and Rahul Yadav in Jaipur, India. Their founding principle — #HideNothing — is built on radical ingredient transparency: every product displays exact active concentrations, sourcing details, and clinical data. This was a direct challenge to legacy beauty brands that obscure formulas behind proprietary blend labels and marketing spend.</p>
                    <p>Within 8 months of launch, Minimalist reached ₹100 crore in revenue. By 2024, revenue reached ₹347 crore. In March 2025, Hindustan Unilever Limited (HUL) acquired a 90.5% stake for ₹2,955 crore — the largest DTC skincare exit in Indian startup history. Active ingredients are sourced from global certified suppliers: Chemours (USA) for Glycolic Acid, Alfa Aesar (USA) for Alpha Arbutin, and BASF (Germany) for UV filters. Manufacturing is handled in-house via Uprising Science Pvt Ltd, Jaipur.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Buy via CouponsCrew</h3>
                    <p>CouponsCrew tracks live pricing across Amazon India and other Indian e-commerce platforms to surface the best available deal at any given moment. For a product like this kit — which regularly sees promotional pricing, bank card discounts, and coupon tick offers — arriving via CouponsCrew increases your chances of buying at the lowest active price. Every deal link on CouponsCrew goes directly to the retailer's verified product page. No counterfeit listings, no inflated "original" prices. Completely free to use — no registration required.</p>
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
                    { q: "What is the Minimalist Anti-Pigmentation Kit?", a: "A three-product daily skincare combo containing a 7% Alpha Lipoic + Glycolic Acid face wash (100ml), a 2% Alpha Arbutin serum (30ml), and an SPF 50 PA++++ multi-vitamin sunscreen (50g). Together, the kit exfoliates dead skin, inhibits melanin production, and provides broad-spectrum UV protection — targeting dark spots, acne marks, sun tan, and uneven tone in one complete routine." },
                    { q: "Is this kit suitable for all skin types?", a: "Yes. All three products are fragrance-free, non-comedogenic, and essential oil-free. The formulations are designed to be tolerable for dry, oily, combination, sensitive, and acne-prone skin. If you have a compromised skin barrier or active inflammatory skin conditions, do a patch test first and consult a dermatologist if unsure. The kit is not recommended for pregnant or breastfeeding women due to Octocrylene in the sunscreen." },
                    { q: "How long does it take to see results?", a: "According to Minimalist's consumer studies, 93% of users noticed reduced sun tanning in 4 weeks and 90% noticed reduced hyperpigmentation in 8 weeks. Individual results depend on the depth and type of pigmentation — sun tanning typically responds fastest; melasma and deep PIH take longer. Consistent twice-daily use of the cleanser and serum, paired with daily SPF reapplication outdoors, is essential." },
                    { q: "Where can I find Minimalist coupon codes?", a: "CouponsCrew tracks active Minimalist discount codes, bank card offers, and promotional pricing across Amazon India. The deal button above links directly to the current live offer. Always check the Amazon listing at checkout — additional coupon ticks at the cart stage may apply that are not visible on the product page." },
                    { q: "Does the kit include sun protection?", a: "Yes. The Multi-Vitamin SPF 50 PA++++ sunscreen is included and is a critical part of the routine. SPF 50 blocks approximately 98% of UVB rays. PA++++ is the highest UVA protection grade. Independent lab testing confirmed a measured SPF of 56.6 (ISO 24444:2019). Sunscreen must be the last step in your morning routine and should be reapplied every 2 hours during extended outdoor exposure — a single morning application is not sufficient for all-day protection." },
                    { q: "Is CouponsCrew free to use?", a: "Yes, completely free. CouponsCrew helps Indian shoppers find verified deals, discount codes, and price drops across skincare, fashion, electronics, and lifestyle categories. No sign-up required to access or use any deal." }
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
