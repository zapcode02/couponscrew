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
              The DEELMO Men's Cotton Blend Mandarin Collar Short Kurta combines a sharp self-design geometric pattern with a comfortable regular fit, making it a great pick for casual outings or festive occasions. Crafted from a breathable cotton blend fabric with full sleeves and a clean mandarin collar, it pairs effortlessly with jeans, pyjamas, or churidars. Available in 8 colours and sizes S to 4XL.
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
                  DEELMO Men's Mandarin Collar Kurta — Complete Style Guide & Deal Review
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">What Makes This DEELMO Mandarin Collar Kurta Worth Buying?</h3>
                  <p>
                    The DEELMO Men's Cotton Blend Mandarin Collar Short Kurta is built for the modern Indian man who wants ethnic style without fuss. It combines a self-design geometric woven pattern with a clean Mandarin (Nehru) collar — one of Indian fashion's most enduring signatures, tracing back to Jawaharlal Nehru's iconic achkans and popularised globally by The Beatles after their 1960s India visit. The collar's short, stand-up design frames the neck cleanly without gaping, creating a sophisticated silhouette that works equally well for casual days and festive occasions.
                  </p>
                  <p>
                    Made from a breathable cotton blend, the kurta is suited to India's varied climate — warm enough to stay comfortable and structured through cooler evenings, breathable enough to wear through long festive afternoons. The self-design pattern is woven into the fabric itself using a jacquard technique, not printed on top — which means the design never fades through washing. Available in 8 colours and sizes S to 4XL, this kurta covers a wider size range than most budget ethnic wear brands at this price point.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">How to Style This Kurta — Bottoms, Occasions & Footwear</h3>
                    <p><strong>With Jeans:</strong> The most popular Indo-Western pairing. Slim or straight dark denim works with virtually any colour variant. Pair with loafers, kolhapuri chappals, or minimal sneakers for a complete casual-festive look.</p>
                    <p><strong>With Pyjama:</strong> Classic kurta-pyjama pairing — straight-cut pyjamas in matching or tonal colours create a relaxed, polished finish for home festivities, Eid, and informal pujas.</p>
                    <p><strong>With Chinos or Trousers:</strong> Tapered chinos in beige, olive, or navy elevate the kurta to smart-casual for office ethnic days or semi-formal gatherings.</p>
                    <p><strong>Occasions:</strong> Diwali, Eid, Navratri, Rakhi, college events, pre-wedding mehndi, casual office ethnic Fridays, and everyday outings. The self-design pattern gives this kurta enough visual interest to dress up but enough restraint to dress down.</p>
                    <p><strong>Short Kurta Advantage:</strong> Hip-length short kurtas require no matching bottoms — wear it with what you already own. Less fabric also means better breathability and travel-friendliness compared to full-length kurtas.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Get the Best Deal on This Kurta</h3>
                    <p className="text-gray-700 font-bold -mt-4">Finding the lowest price on the DEELMO Kurta takes less than a minute.</p>
                    <div className="space-y-6">
                      {[
                        "Click the \"GET THIS DEAL ON AMAZON\" button above to open the live Amazon India listing.",
                        "Check the current deal price — Amazon frequently applies additional bank card discounts and coupon ticks at checkout.",
                        "Select your size. If unsure between two sizes, size up — cotton blend kurtas fit slightly snug compared to size labels.",
                        "Add to Cart and sign in to your Amazon India account.",
                        "At checkout, check for any active coupon box on the cart page — additional discounts are sometimes stackable.",
                        "Complete your order. Standard or Prime delivery applies based on your account and pincode."
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
                    <p>The cotton blend fabric typically combines cotton with polyester or viscose to balance breathability, wrinkle resistance, and durability. The polyester or viscose component means the kurta resists creasing better than pure cotton — useful for a garment you might throw on for a last-minute invitation.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Machine wash on gentle cycle in cold water (30°C max)</li>
                      <li>Turn inside out before washing to protect the outer woven surface</li>
                      <li>Wash dark colours (navy, mehendi green, maroon) separately for first wash to check for colour bleed</li>
                      <li>Air dry in shade — direct sunlight can fade colours and weaken fibres</li>
                      <li>Iron at medium heat while slightly damp; steam iron preferred for woven self-design patterns</li>
                      <li>Avoid tumble drying on high heat to prevent shrinkage</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Who Should Buy This Kurta</h3>
                    <p>This kurta is ideal for men aged 18–45 who want a versatile ethnic piece that handles multiple occasions without requiring a separate wardrobe. The hip-length cut and self-design pattern make it appropriate for festive gatherings without looking out of place at a casual outing. If you rotate between multiple events — a college event one weekend, a family Diwali celebration the next — a short kurta in a good colour handles both without rethinking.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Men looking for ethnic wear that pairs with existing jeans and trousers</li>
                      <li>Plus-size men (3XL, 4XL) who find budget ethnic wear options limited — this range goes up to 4XL, rare at this price point</li>
                      <li>Buyers wanting self-design texture rather than printed patterns that look cheap over time</li>
                      <li>First-time ethnic wear buyers wanting a low-risk, versatile entry piece</li>
                      <li>Office employees on ethnic dress days who want to avoid spending on expensive branded kurtas</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">About the DEELMO Brand</h3>
                    <p>DEELMO is an Indian ethnic wear brand selling on Amazon India and Flipkart with a catalogue of 50+ men's kurta styles. Their positioning is consistent: set a high MRP (₹1,399–₹2,999 across the range) and sell at a deep discount (70–83% off), making budget-friendly ethnic wear accessible without sacrificing design variety. The Mandarin Collar Short Kurta is one of their bestselling styles — over 1,600 buyer reviews on Amazon India reflect consistent demand across the colour range.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Buy via CouponsCrew</h3>
                    <p>CouponsCrew tracks live pricing on Amazon India so you reach this product at the best available offer — including seasonal promotions, bank card discounts, and checkout coupon ticks that appear only at the cart stage. Every deal link goes directly to the verified Amazon listing, with no inflated before-prices or intermediary redirects. Free to use, no registration required.</p>
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
                    { q: "What fabric is the DEELMO kurta made of?", a: "The kurta uses a cotton blend fabric — typically cotton combined with polyester or viscose. The polyester/viscose component adds wrinkle resistance and durability compared to pure cotton, while retaining breathability suited to India's climate. The exact blend ratio is not disclosed by the brand, but the fabric feels soft and comfortable for daily and festive wear." },
                    { q: "Is this kurta suitable for festive occasions?", a: "Yes. The self-design geometric woven pattern — created by a jacquard loom technique, not printed — gives the kurta a subtle textured richness that reads as festive without being overdressed. Pair with pyjama for traditional events or with slim jeans for a more contemporary festive look. Works for Diwali, Eid, Rakhi, mehndi events, college parties, and family gatherings." },
                    { q: "What is a mandarin collar?", a: "A mandarin collar (also known as a Nehru collar or band collar) is a short, stand-up collar that rises 2–5 cm from the neckline without folding over. Its origins trace to Imperial China and Indian political history — made globally famous by India's first Prime Minister Jawaharlal Nehru. In men's ethnic wear, it creates a clean, modern silhouette that flatters all neck and body types." },
                    { q: "Where can I find DEELMO coupon codes?", a: "CouponsCrew tracks active pricing, promotional discounts, and bank card offers on the DEELMO Mandarin Collar Kurta across Amazon India. The deal button above links to the current live offer. Also check the checkout page on Amazon — additional coupon ticks are sometimes available at cart that are not visible on the product page." },
                    { q: "Can this kurta be machine washed?", a: "Yes. Machine wash on a gentle cycle in cold water (30°C). Turn inside out before washing to protect the woven self-design surface. Air dry in shade. Iron at medium heat while slightly damp. Avoid high-heat tumble drying, which can cause shrinkage in cotton-blend fabrics." },
                    { q: "Should I size up or order my usual size?", a: "Most buyers of budget cotton blend kurtas recommend sizing up by one size for a comfortable fit. If you prefer a fitted look, your standard size may work. Note that size charts can vary between colour variants of the same style — check the specific size chart on the Amazon listing before ordering." }
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
