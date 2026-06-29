'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  Star,
  ShieldCheck,
  Truck,
  Zap,
  Heart,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
  Award,
  Sparkles,
  Droplet,
  Sun,
  Leaf,
  ArrowRight
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

export default function MinimalistKitPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const productImages = [
    'https://images.unsplash.com/photo-1556228720-da4e95ac3699?w=600&q=80',
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
    'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80'
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText('SAVE50');
    setCopiedCode('SAVE50');
    setShowModal(true);
    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

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

  const relatedProducts = [
    {
      name: 'Minimalist 2% Salicylic Acid Serum',
      price: 499,
      originalPrice: 699,
      discount: 29,
      image: 'https://images.unsplash.com/photo-1556228720-da4e95ac3699?w=300&q=80',
      rating: 4.3
    },
    {
      name: 'Minimalist Vitamin C Face Serum',
      price: 599,
      originalPrice: 849,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&q=80',
      rating: 4.5
    },
    {
      name: 'Minimalist Sepicalm Sunscreen SPF 50',
      price: 449,
      originalPrice: 599,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=300&q=80',
      rating: 4.2
    },
    {
      name: 'Minimalist 5% Niacinamide Face Wash',
      price: 299,
      originalPrice: 399,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&q=80',
      rating: 4.4
    }
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
              <button
                onClick={handleCopyCode}
                className="w-full bg-[#FF5722] hover:bg-orange-600 text-white py-4 rounded-2xl font-black text-sm tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98] cursor-pointer"
              >
                <Zap size={16} className="fill-white" />
                <span>ACTIVATE & COPY CODE (SAVE50)</span>
              </button>
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

        {/* More products section */}
        <div className="space-y-6 mb-10">
          <div className="flex justify-between items-end border-b border-gray-200 pb-3">
            <h3 className="text-xl font-black text-[#1A1A2E]">More Skincare You'll Love</h3>
            <Link href="/products?category=beauty" className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest hover:underline flex items-center gap-1.5">
              <span>View All Skincare</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((p, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-[#E8E8F0] p-4 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="bg-[#F8F8FF] aspect-square rounded-xl p-3 flex items-center justify-center relative overflow-hidden mb-3">
                  <div className="absolute top-2 left-2 bg-[#FF5722] text-white text-[9px] font-black px-2 py-0.5 rounded">
                    {p.discount}% OFF
                  </div>
                  <img src={p.image} alt={p.name} className="max-h-[85%] max-w-[85%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h4 className="font-extrabold text-[#1A1A2E] text-xs leading-snug line-clamp-1 truncate group-hover:text-[#5B4FBE] transition-colors">{p.name}</h4>
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <span className="font-black text-sm text-[#1A1A2E]">₹{p.price}</span>
                  <span className="line-through text-[10px] text-gray-400 font-medium">₹{p.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Content */}

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

              {/* Left: Text Content */}
              <div className="prose max-w-none">
                <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
                  Minimalist Coupon Codes, Promo Codes & Skincare Deals
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Save More with Minimalist Coupon Codes</h3>
                  <p>
                    Even, healthy-looking skin starts with the right combination of actives. Whether you're dealing with stubborn dark spots, post-acne marks, or sun-induced tanning, a consistent skincare routine can make a visible difference. With the latest <strong>Minimalist coupon codes</strong>, CouponScrew helps shoppers find savings on dermatologically backed skincare essentials like this Anti-Pigmentation Kit.
                  </p>
                  <p>
                    From gentle cleansers to targeted serums and broad-spectrum sunscreens, Minimalist formulates products with clinically proven concentrations of active ingredients. Before you check out, browse CouponScrew for the latest promo codes, discounts, and bundle offers.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Choose This Anti-Pigmentation Kit?</h3>
                    <p><strong>Targeted Actives:</strong> Alpha Arbutin and Niacinamide are well-studied ingredients known to help even out skin tone over consistent use.</p>
                    <p><strong>Daily Sun Protection:</strong> The included SPF 50 sunscreen helps prevent further pigmentation caused by UV exposure.</p>
                    <p><strong>Gentle Formulation:</strong> Fragrance-free and dermatologically tested, suitable for daily use across most skin types.</p>
                    <p><strong>Complete Routine in One Kit:</strong> A face wash, serum, and sunscreen bundled together simplifies your skincare routine.</p>
                    <p><strong>Lightweight Texture:</strong> Fast-absorbing formulas that don't leave a greasy residue.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use a Minimalist Coupon Code</h3>
                    <p className="text-gray-700 font-bold -mt-4">Saving on your next skincare order is quick and easy.</p>
                    <div className="space-y-6">
                      {[
                        "Step 1: Visit CouponScrew — Browse the latest Minimalist coupon codes and promotional offers.",
                        "Step 2: Choose a Deal — Select the offer that best matches your purchase.",
                        "Step 3: Copy the Coupon Code — Copy the available promo code before visiting the store.",
                        "Step 4: Shop Your Skincare Kit — Add the Anti-Pigmentation Kit to your cart.",
                        "Step 5: Apply the Coupon — Paste the coupon code during checkout if applicable.",
                        "Step 6: Complete Your Order — Finish your purchase and start your skincare routine."
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
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Smart Ways to Save More on Skincare</h3>
                    <p className="text-gray-700 font-bold">Want to maximize your savings? Here are a few practical tips.</p>
                    <p><strong>Check CouponScrew Before Every Purchase:</strong> New Minimalist promo codes and seasonal offers may become available throughout the year.</p>
                    <p><strong>Shop During Skincare Sales:</strong> Major shopping events often feature additional discounts on combo kits.</p>
                    <p><strong>Buy in Bundles:</strong> Combo kits like this one often offer better value than buying products individually.</p>
                    <p><strong>Patch Test First:</strong> Always patch test new actives before applying to your full face.</p>
                    <p><strong>Join Brand Updates:</strong> Subscribing to newsletters can help you stay informed about future launches and exclusive offers.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why a Consistent Skincare Routine Matters</h3>
                    <p>Investing in a dependable skincare routine can make a real difference over time.</p>
                    <p className="text-gray-700 font-bold">A good routine helps you:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Fade dark spots and pigmentation gradually</li>
                      <li>Protect skin from harmful UV rays</li>
                      <li>Maintain an even, healthy-looking complexion</li>
                      <li>Reduce the appearance of post-acne marks</li>
                      <li>Build long-term skin confidence</li>
                    </ul>
                    <p>Whether you're new to actives or refining an existing routine, choosing quality, dermatologically tested products can enhance results.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Use CouponScrew for Minimalist Deals?</h3>
                    <p className="text-gray-700 font-bold">CouponScrew helps shoppers discover valuable savings across skincare, fashion, technology, and lifestyle brands.</p>
                    <p><strong>Updated Discounts:</strong> We regularly update available Minimalist promotions and coupon codes.</p>
                    <p><strong>Easy-to-Find Deals:</strong> Browse offers in one convenient location before making your purchase.</p>
                    <p><strong>Completely Free:</strong> CouponScrew is free to use whenever you're searching for ways to save.</p>
                    <p><strong>Trusted Brands:</strong> In addition to skincare, CouponScrew features savings from hundreds of popular brands across multiple shopping categories.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Start Your Skincare Journey Today</h3>
                    <p>Whether you're targeting pigmentation, building a daily SPF habit, or simplifying your skincare shelf, having a reliable kit can make all the difference.</p>
                    <p>Browse the latest Minimalist coupon codes, promo offers, and skincare deals on CouponScrew today and save on the products you need.</p>
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
                    { q: "What is the Minimalist Anti-Pigmentation Kit?", a: "It is a combo kit featuring a face wash, serum, and sunscreen formulated with Alpha Arbutin and Niacinamide to help reduce the appearance of dark spots and pigmentation." },
                    { q: "Is this kit suitable for all skin types?", a: "Yes, the kit is fragrance-free and dermatologically tested, making it suitable for most skin types including sensitive skin." },
                    { q: "How long does it take to see results?", a: "Visible improvement in skin tone typically takes several weeks of consistent daily use, as with most active skincare ingredients." },
                    { q: "Where can I find Minimalist coupon codes?", a: "You can browse the latest Minimalist coupon codes, promo offers, and skincare deals on CouponScrew." },
                    { q: "Does the kit include sun protection?", a: "Yes, the kit includes an SPF 50 PA++++ sunscreen to help protect skin from further UV-induced pigmentation." },
                    { q: "Is CouponScrew free to use?", a: "Absolutely. CouponScrew is completely free and helps shoppers discover verified coupon codes, promo offers, and discounts from trusted brands." }
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
                    {["Anti-Pigmentation Kit", "Minimalist Promo Code", "Niacinamide Serum", "Alpha Arbutin Serum", "SPF 50 Sunscreen", "Skincare Combo", "Dark Spot Removal", "CouponScrew Beauty"].map(tag => (
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
                      { heading: "Skincare Combo Bundle", sub: "Save up to 30% when bundling essential face care kits and serums" },
                      { heading: "First Order Promo Code", sub: "Special percentage metrics adjusted on introductory store registrations" },
                      { heading: "Complimentary Delivery", sub: "Standard logistics handling applied cleanly over minimum budget parameters" },
                      { heading: "Seasonal Skincare Sale", sub: "Limited-time price reductions on selected serums and combo kits" },
                      { heading: "CouponScrew Active Coupon", sub: "Instant validation code application calculated cleanly during check out" }
                    ].map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">M</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href="https://amzn.to/4oRAEV3" target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Minimalist deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* Copy Code Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-xs select-none">
          <div className="bg-white rounded-3xl border border-[#E8E8F0] shadow-2xl p-6 md:p-8 max-w-md w-full text-center relative space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A2E]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Use the code <span className="font-extrabold text-[#5B4FBE]">SAVE50</span> at checkout for instant discounts.
              </p>
            </div>

            <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl py-3 px-4 flex items-center justify-between gap-4">
              <span className="font-mono font-bold text-sm tracking-wider text-gray-500 select-all">
                SAVE50
              </span>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 uppercase">
                Copied
              </span>
            </div>

            <div className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 justify-center bg-gray-50 py-2.5 px-4 rounded-xl border border-gray-100">
              <AlertCircle size={14} className="text-gray-400" />
              <span>Make sure to paste code before finalizing payment.</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://amzn.to/4oRAEV3"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() => setShowModal(false)}
                className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Minimalist</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={() => setShowModal(false)}
                className="w-full text-xs font-bold text-gray-400 hover:text-[#1A1A2E] py-2 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
