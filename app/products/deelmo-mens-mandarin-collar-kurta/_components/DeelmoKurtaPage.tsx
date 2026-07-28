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
  Shirt,
  Layers,
  Sun,
  Feather
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const AFFILIATE_URL = 'https://amzn.to/3R7tzTR';

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

export default function DeelmoKurtaPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const productImages = [
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162400/71Qhqwnx4JL._SY741__ljgmwm.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162401/71iQ9DMq65L._SY741__id4oru.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162400/61FYqpSEQjL._SY741__txtq3d.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162401/71UgsQn_dfL._SY741__vcxyhd.jpg',
  ];

  const specifications = [
    { key: 'Brand', value: 'DEELMO' },
    { key: 'Material', value: 'Cotton Blend' },
    { key: 'Sleeve Type', value: 'Full Sleeve' },
    { key: 'Length', value: 'Short Length' },
    { key: 'Neck Style', value: 'V-Neck (Mandarin Collar)' },
    { key: 'Pattern', value: 'Geometric, Self Design' },
    { key: 'Style', value: 'Regular Fit' },
    { key: 'Item Weight', value: '240 g' },
    { key: 'Country of Origin', value: 'India' },
    { key: 'Return Policy', value: '10 Days Return & Exchange' }
  ];

  const keyFeatures = [
    'Breathable & Comfortable Cotton Blend Fabric',
    'Unique One-Side Solid/Printed Geometric Pattern',
    'Versatile Full Sleeve — Suited for Every Season',
    'Casual Elegance — Festive, Wedding, Party & Date Night Wear',
    'Machine Washable for Easy, Convenient Care',
    'Mandarin Collar for a Sharp Ethnic Look',
    'Available in 8 Colours & Sizes S to 4XL'
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
          <span className="text-[#5B4FBE] font-semibold">DEELMO Mandarin Collar Kurta</span>
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
                  <img src={img} alt={`DEELMO Mandarin Collar Kurta Thumbnail ${i + 1}`} className="w-full h-full object-contain mix-blend-multiply rounded-lg" />
                </button>
              ))}
            </div>

            {/* Main Image Display Box */}
            <div className="flex-1 bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl aspect-square flex items-center justify-center p-6 relative overflow-hidden group">
              {/* Discount Stamp badge */}
              <div className="absolute top-4 left-4 bg-[#FF5722] text-white text-[11px] font-black px-3 py-1 rounded-lg shadow-sm tracking-wide select-none uppercase">
                78% OFF
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
                alt="DEELMO Men's Mandarin Collar Kurta"
                className="max-h-[90%] max-w-[90%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT: Product Details Column */}
          <div className="lg:col-span-6 text-left space-y-5">
            <span className="bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider select-none">
              Men's Ethnic Wear
            </span>

            <div className="space-y-2">
              <h1 className="text-3xl font-black text-[#1A1A2E] leading-tight">
                DEELMO Men's Cotton Blend Mandarin Collar Short Kurta
              </h1>
              <p className="text-sm font-semibold text-gray-400">
                Self Design, Full Sleeve, Casual & Festive Kurta
              </p>
            </div>

            {/* Rating Stars section */}
            <div className="flex items-center gap-4 select-none">
              <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-3 py-1 rounded-full text-xs font-bold border border-[#FFE7B3]">
                <Star size={14} className="fill-current" />
                <span>3.6 / 5</span>
              </div>
              <span className="text-xs text-gray-400 font-semibold">(2,338 Ratings)</span>
              <span className="text-xs text-gray-400 font-semibold">|</span>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100 uppercase">300+ Bought This Month</span>
            </div>

            {/* Price section */}
            <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none block">Best Deal Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#1A1A2E]">₹479</span>
                  <span className="line-through text-sm text-gray-400 font-medium">₹2,199</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-emerald-600 font-black tracking-widest uppercase block">Total Savings</span>
                <span className="text-base font-black text-emerald-600">Save ₹1,720 (78%)</span>
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
                <span>10 Days Return & Exchange</span>
              </div>
            </div>

            <p className="text-xs text-[#4A4A6A] leading-relaxed">
              The Deelmo mandarin collar kurta combines a sharp self-design geometric pattern with a comfortable regular fit, making it a great pick for casual outings or festive occasions. Crafted from a breathable cotton blend fabric with full sleeves, it pairs effortlessly with jeans, pyjamas, or churidars. Available in 8 colours and sizes S to 4XL.
            </p>

            {/* Row of Icon Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'Mandarin Collar', icon: Shirt, desc: 'Sharp Ethnic Look' },
                { label: 'Self Design', icon: Layers, desc: 'Subtle Texture' },
                { label: 'Cotton Blend', icon: Feather, desc: 'Breathable Comfort' },
                { label: 'Full Sleeve', icon: Sun, desc: 'Festive Ready' }
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
              <h4 className="text-lg font-black text-[#1A1A2E]">10-Day Return & Exchange</h4>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                Not satisfied with the fit or fabric? This kurta comes with a 10-day return & exchange window for genuine sizing or quality concerns.
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
                  Deelmo Mandarin Collar Kurta — Complete Style Guide & Deal Review
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">What Makes This Deelmo Mandarin Collar Kurta Worth Buying?</h3>
                  <p>
                    There are two kinds of ethnic wear brands in India: the ones that charge ₹2,500 for a kurta and make you feel like you're doing them a favour, and the ones that give you the same look for ₹479. DEELMO is firmly in the second camp. This mandarin collar kurta uses a jacquard-woven self-design — meaning the pattern is built into the fabric, not printed over it — so it won't fade, crack, or look cheap after three washes.
                  </p>
                  <p>
                    The Mandarin collar (also called the Nehru collar) has a clean history. It traces back to Jawaharlal Nehru's iconic achkans and went global after The Beatles wore it during their 1967 India trip. The stand-up design frames the neck without gaping — which is more than can be said for half the ethnic wear sold online. It creates a polished silhouette whether you're at a puja or a party.
                  </p>
                  <p>
                    Cotton blend fabric means breathability without the crumple-every-time-you-sit problem of pure cotton. 8 colours. Sizes S to 4XL. One price. There's not much left to overthink.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">How to Style This Kurta — Bottoms, Occasions & Footwear</h3>
                    <p>This kurta is versatile enough to handle most situations without you having to think too hard about it. (If you're reading this on a Thursday night before a Friday ethnic day at work — slim dark jeans and this kurta. You're sorted.)</p>
                    <p><strong>With Jeans:</strong> The most popular pairing. Slim or straight dark denim works with any colour variant. Add loafers, kolhapuri chappals, or minimal sneakers and you're done.</p>
                    <p><strong>With Pyjama:</strong> Classic pairing — straight-cut pyjamas in matching or tonal colours. Good for Eid, home festivities, and informal pujas.</p>
                    <p><strong>With Chinos or Trousers:</strong> Tapered chinos in beige, olive, or navy push this into smart-casual territory — office ethnic days, semi-formal gatherings, no problem.</p>
                    <p><strong>Occasions:</strong> Diwali, Eid, Navratri, Rakhi, college events, pre-wedding mehndi, and everyday outings. The jacquard pattern is interesting enough to dress up and restrained enough to dress down.</p>
                    <p><strong>Short Kurta advantage:</strong> Hip-length means no matching bottoms needed — wear it with what you already own. Less fabric also means better breathability on long event days.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Get the Best Deal on This Kurta</h3>
                    <p className="text-gray-700 font-bold -mt-4">The price is already applied on Amazon. Here's how to make sure you don't miss the extra saving at checkout.</p>
                    <div className="space-y-6">
                      {[
                        "Click \"GET THIS DEAL ON AMAZON\" above. You'll land on the live listing with the discount already applied.",
                        "Check for a coupon tick above the price on the Amazon product page — it's a small checkbox that applies an extra 5–10% off. Tick it if it's there.",
                        "Select your size — and if you're between two, go one up. Cotton blend kurtas run slightly snug. Trust us on this one.",
                        "Click Add to Cart and sign in to your Amazon India account.",
                        "At the payment step, check if your bank card (HDFC, SBI, ICICI, Axis) has an active offer — bank discounts sometimes stack on top of the product price.",
                        "Complete your order. Prime members get free delivery; standard delivery applies otherwise."
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
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Fabric & Care — What You Need to Know</h3>
                    <p>Cotton-blend fabric gives you breathability without the crumple-every-time-you-sit issue of pure cotton. The polyester or viscose component handles wrinkle resistance — useful for a kurta you might throw on at short notice.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Machine wash on gentle cycle in cold water (30°C max)</li>
                      <li>Turn inside out before washing to protect the outer woven surface</li>
                      <li>Wash dark colours (navy, mehendi green, maroon) separately for the first wash — they can bleed (Navy and maroon especially. Separate. Always.)</li>
                      <li>Air dry in shade — direct sunlight fades colours and weakens fibres</li>
                      <li>Iron at medium heat while slightly damp; steam iron preferred for woven self-design patterns</li>
                      <li>Avoid tumble drying on high heat — shrinkage is real</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Who Should Buy This Kurta</h3>
                    <p>If you're looking for a mens mandarin collar kurta that handles a college event one weekend and a family Diwali the next — this is that kurta. The hip-length cut pairs with what you already own. The jacquard pattern reads festive without looking overdressed.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Men who want ethnic wear that pairs with existing jeans and trousers</li>
                      <li>Plus-size buyers (3XL, 4XL) — most budget brands stop at XL or 2XL; this range goes to 4XL, which is genuinely rare at ₹479</li>
                      <li>Buyers who want a woven self-design texture instead of printed patterns that look cheap after a few washes</li>
                      <li>First-time ethnic wear buyers who want a versatile, low-risk starting piece</li>
                      <li>Office workers on ethnic dress days who'd rather spend ₹479 than ₹2,500 on a branded kurta</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">About the DEELMO Brand</h3>
                    <p>DEELMO's strategy is simple: list at ₹2,999, sell at ₹479. The MRP is theatrical — we'll be straight about that. But ₹479 for a jacquard-woven mandarin collar kurta with over 1,600 Amazon reviews and 50+ styles in the catalogue is genuinely good value. They've earned that review count. The extended sizing up to 4XL is a real differentiator — most budget ethnic brands don't go past 2XL.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Buy via CouponsCrew</h3>
                    <p>We track live Amazon India pricing on this product — including bank card offers, seasonal promotions, and the coupon ticks that only appear at checkout. Every deal link goes directly to the verified listing. No inflated before-prices, no redirect chains. Whether it's your first ethnic buy or your fifth — the deal link above always points to the current verified price.</p>
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
                    { q: "What fabric is the DEELMO kurta made of?", a: "Cotton blend — typically cotton with polyester or viscose. The polyester/viscose component adds wrinkle resistance so the kurta doesn't crumple the moment you sit down. DEELMO doesn't publish the exact blend ratio, which is frustrating, but the fabric feels soft and handles India's climate well for both daily wear and festive events." },
                    { q: "Is this kurta suitable for festive occasions?", a: "Yes. The jacquard-woven self-design pattern — built into the fabric, not printed on top — reads as festive without being overdressed. That's the hardest balance to get right in ethnic wear, and this pulls it off. Pair with pyjama for traditional events or slim jeans for a contemporary festive look. Works for Diwali, Eid, Rakhi, mehndi, college parties, and family gatherings." },
                    { q: "What is a mandarin collar?", a: "A short, stand-up collar that rises 2–5 cm from the neckline without folding over. Also called the Nehru or band collar. In a mens mandarin collar kurta, it frames the neck cleanly, looks intentional whether you're at a party or a puja, and doesn't gap like a regular collar." },
                    { q: "Where can I find DEELMO coupon codes?", a: "CouponsCrew tracks this product daily. The deal button above links to the current live offer on Amazon. Also check the Amazon cart page after adding to cart — there's sometimes a coupon tick above the price that's easy to miss and gives you an extra 5–10% off." },
                    { q: "Can this kurta be machine washed?", a: "Yes. This short kurta for men handles regular washing well — just avoid high-heat tumble drying, which causes cotton blend fabrics to shrink. Gentle cycle, cold water (30°C max). Turn inside out before washing. Air dry in shade. Iron at medium heat while slightly damp; steam iron is better for the woven self-design." },
                    { q: "Should I size up or order my usual size?", a: "Size up by one. Cotton blend kurtas are cut slightly slim. If you're a perfect medium in most brands, order large here. Most sizing complaints from buyers are from people who ordered their usual size. Don't be that person." }
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular DEELMO Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Mandarin Collar Kurta", "Men's Short Kurta", "Cotton Blend Ethnic Wear", "Festive Kurta for Men", "Nehru Collar Kurta", "Kurta with Jeans", "Plus Size Kurta India", "CouponsCrew Fashion"].map(tag => (
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top DEELMO Deals</h3>
                  <div className="space-y-6">
                    {[
                      { heading: "Mandarin Collar Short Kurta", sub: "Self-design woven pattern, 8 colours, S to 4XL — 78% off MRP" },
                      { heading: "DEELMO Solid Straight Kurta", sub: "Clean solid colours for everyday and office ethnic wear" },
                      { heading: "Short Kurta + Pyjama Set", sub: "Complete ethnic combo — festive-ready in one order" },
                      { heading: "Plus Size Kurta (3XL–4XL)", sub: "Extended sizing rare at this price — great for broader builds" },
                      { heading: "Festive Season Ethnic Deals", sub: "Browse all men's kurta offers on Amazon India via CouponsCrew" }
                    ].map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">D</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get DEELMO deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
