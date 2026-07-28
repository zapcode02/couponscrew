'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  Star,
  Truck,
  Heart,
  Check,
  ExternalLink,
  Award,
  Dumbbell,
  Layers,
  Activity,
  Flame
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const AFFILIATE_URL = 'https://amzn.to/4uUuG7b';

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

export default function PulgosPushupBoardPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const productImages = [
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162810/81RW0nGbEZL._SL1500__u4abvp.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162813/718W_a8O6iL._SX679__bssoj3.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162811/712d3EKF8BL._SX679__n7js04.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162808/716pybIi4eL._SX679__hqvg8k.jpg',
  ];

  const specifications = [
    { key: 'Brand', value: 'PulGos' },
    { key: 'Product Type', value: '15-in-1 Pushup Board' },
    { key: 'Foldable', value: 'Yes — Compact & Portable' },
    { key: 'Grip Type', value: 'Ergonomic Non-Slip Surface' },
    { key: 'Workout Positions', value: '15 Adjustable Positions' },
    { key: 'Target Muscles', value: 'Chest, Triceps, Shoulders, Back' },
    { key: 'Ideal For', value: 'Home Workouts & Travel' },
    { key: 'Best Seller Rank', value: '#1 in Push-Up Stands' },
    { key: 'Construction', value: 'High-Quality Durable Materials' },
    { key: 'Returns', value: 'Check Listing for Policy' }
  ];

  const keyFeatures = [
    '15 Adjustable Positions for a Full-Body Workout',
    'Multifunctional Flex Board — Chest, Triceps, Shoulders & Back',
    'Ergonomic, Non-Slip Surface for Secure Grip & Stability',
    'Lightweight & Compact — Easy to Store and Transport',
    'Ideal for Home Gyms or Travel Workouts',
    'Durable, High-Quality Construction for Long-Lasting Use',
    '#1 Best Seller in Push-Up Stands on Amazon'
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
          <span className="text-[#5B4FBE] font-semibold">PulGos 15-in-1 Pushup Board</span>
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
                  <img src={img} alt={`PulGos 15-in-1 Pushup Board Thumbnail ${i + 1}`} className="w-full h-full object-contain mix-blend-multiply rounded-lg" />
                </button>
              ))}
            </div>

            {/* Main Image Display Box */}
            <div className="flex-1 bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl aspect-square flex items-center justify-center p-6 relative overflow-hidden group">
              {/* Discount Stamp badge */}
              <div className="absolute top-4 left-4 bg-[#FF5722] text-white text-[11px] font-black px-3 py-1 rounded-lg shadow-sm tracking-wide select-none uppercase">
                40% OFF
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
                alt="PulGos 15-in-1 Pushup Board"
                className="max-h-[90%] max-w-[90%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT: Product Details Column */}
          <div className="lg:col-span-6 text-left space-y-5">
            <span className="bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider select-none">
              Fitness Equipment
            </span>

            <div className="space-y-2">
              <h1 className="text-3xl font-black text-[#1A1A2E] leading-tight">
                PulGos 15-in-1 Foldable Pushup Board
              </h1>
              <p className="text-sm font-semibold text-gray-400">
                Compact Home Gym Equipment for Full-Body Workouts
              </p>
            </div>

            {/* Rating Stars section */}
            <div className="flex items-center gap-4 select-none">
              <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-3 py-1 rounded-full text-xs font-bold border border-[#FFE7B3]">
                <Star size={14} className="fill-current" />
                <span>3.8 / 5</span>
              </div>
              <span className="text-xs text-gray-400 font-semibold">(1,041 Ratings)</span>
              <span className="text-xs text-gray-400 font-semibold">|</span>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100 uppercase">6K+ Bought This Month</span>
            </div>

            {/* Price section */}
            <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none block">Best Deal Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#1A1A2E]">₹299</span>
                  <span className="line-through text-sm text-gray-400 font-medium">₹499</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-emerald-600 font-black tracking-widest uppercase block">Total Savings</span>
                <span className="text-base font-black text-emerald-600">Save ₹200 (40%)</span>
              </div>
            </div>

            {/* Availability details */}
            <div className="flex items-center gap-6 py-1 select-none">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A1A2E]">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full inline-block animate-pulse"></span>
                <span>#1 Best Seller</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                <Truck size={16} className="text-[#5B4FBE]" />
                <span>Pay on Delivery</span>
              </div>
            </div>

            <p className="text-xs text-[#4A4A6A] leading-relaxed">
              This PulGos board offers 15 adjustable workout positions to help you train your chest, triceps, shoulders, and back from the comfort of your home. Its foldable, lightweight design makes it easy to store and carry, while the ergonomic, non-slip surface ensures a secure grip during intense workout sessions. The #1 best seller in Push-Up Stands on Amazon.
            </p>

            {/* Row of Icon Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: '15 Positions', icon: Layers, desc: 'Full-Body Training' },
                { label: 'Foldable Design', icon: Dumbbell, desc: 'Compact Storage' },
                { label: 'Anti-Slip Grip', icon: Activity, desc: 'Safe & Secure' },
                { label: 'Up to 150 Kg', icon: Flame, desc: 'Sturdy Build' }
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
              <h4 className="text-lg font-black text-[#1A1A2E]">#1 Best Seller</h4>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                Ranked #1 Best Seller in Push-Up Stands on Amazon, built with durable, high-quality materials for long-lasting performance.
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
                  PulGos Pushup Board — Complete Fitness Review & Home Workout Guide
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">What Is the PulGos 15-in-1 Pushup Board?</h3>
                  <p>
                    ₹299 for the #1 Best Seller in Push-Up Stands on Amazon India. 6,000+ people buy this every month. That kind of number doesn't happen by accident. The PulGos pushup board is a colour-coded push-up training system with 15 adjustable handle positions targeting four muscle groups — chest, triceps, shoulders, and back. It's the most accessible full-spectrum push-up tool available in the Indian market, and it has the review count to back that up.
                  </p>
                  <p>
                    The board works differently from the floor. Your wrists stay in a neutral position — straight line from knuckle to forearm — instead of being bent at 90 degrees into the ground. That eliminates wrist compression and lets your muscles do the actual work. Push-up boards produce up to 20% greater chest and triceps activation than floor push-ups — because the neutral wrist position removes the inhibition reflex that limits force output when wrists are bent. The deeper range of motion — chest descending below handle level — stretches the pec fibres further before contraction. More stretch, more activation, more result per rep.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">The 15 Positions — What Each Colour Zone Targets</h3>
                    <p><strong>Red Zone — Chest:</strong> Wide, outward-angled handle positions that hit the pectoralis major's lateral and sternal fibres. The wide grip increases the arc of motion across the chest — more stretch, more contraction range. This is your primary chest builder. Start here.</p>
                    <p><strong>Blue Zone — Shoulders:</strong> Shoulder-width, forward-angled positions that shift load toward the anterior (front) deltoid. The forward angle pulls the chest out and the shoulders in. Best for anterior deltoid definition and anyone who's been told their shoulders look flat.</p>
                    <p><strong>Yellow Zone — Back & Traps:</strong> Wide inward-angled positions that pull the upper back into the movement — trapezius and posterior deltoids. This is the most underused zone in beginner routines, and also the one that directly fixes the forward-rounded posture that 8 hours at a desk produces.</p>
                    <p><strong>Green Zone — Triceps:</strong> Narrow, diamond, and close-grip positions with hands close to the chest centreline. EMG research confirms diamond push-ups produce peak activation of both the triceps brachii and the inner chest. (Diamond push-ups on this board are significantly harder than they look. Don't start there.)</p>
                    <p><strong>How positions work:</strong> Two movable handles insert into 15 different slot combinations. Each insertion automatically sets your hand width and angle — you don't need to know what "pronated grip scapular depression" means. Follow the colour, insert, and train.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-8">Getting Started — Your First Workout Routine</h3>
                    <p className="text-gray-700 font-bold -mt-4">Start here. Three days a week. 25 minutes. This is the beginner routine that makes the colour-coded system actually useful.</p>
                    <div className="space-y-6">
                      {[
                        "Red Zone (Chest) — Wide handle position: 2 sets of 8–10 reps. Rest 30 seconds. This is your primary chest builder — begin every session here.",
                        "Blue Zone (Shoulders) — Shoulder-width forward position: 2 sets of 6–8 reps. Rest 30 seconds.",
                        "Green Zone (Triceps) — Narrow/close position: 2 sets of 6–8 reps. Rest 45 seconds. Don't start with diamond grip — work up to it.",
                        "Yellow Zone (Back) — Wide inward-angle position: 2 sets of 6–8 reps. Rest 45 seconds. Most beginners skip this zone. Don't — it's the one that fixes posture.",
                        "Rest 60–90 seconds between colour groups. Total session: approximately 25 minutes.",
                        "When you can hit the top of the rep range with 2 reps still in the tank — add one set. Don't jump straight to more reps. That's how shoulders get unhappy."
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
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Honest Assessment — Pros & Cons</h3>
                    <p>At ₹299, this board replaces the need for a gym membership for upper body beginners. The colour-coded system actually works — you don't need to know what "pronated grip scapular depression" means. Follow the colour. Do the rep. The wrist protection is real and significant: if you've ever quit floor push-ups because your wrists hurt, this is the fix. Folds flat, 150 kg rated, no assembly.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Slides on polished marble floors — common in Indian homes; use a yoga mat or rubber mat underneath (this is the most practically important caveat for most buyers)</li>
                      <li>Handles may loosen slightly over months of heavy daily use — press back in firmly when needed</li>
                      <li>Not designed for plyometric (clapping) push-ups — built for controlled movement only</li>
                      <li>Once you hit 20+ reps in every position, you'll need external load — weighted vest or resistance bands — to keep progressing</li>
                      <li>The instruction leaflet's colour-to-muscle mapping sometimes differs from what's printed on the board — trust the board, ignore the leaflet</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Who Should Buy This Board</h3>
                    <p>If you're looking for a pushup board for home workout without a gym membership — this is the answer. Under ₹300, ships in a day, no assembly. The colour-coded system does the programming for you: pick a zone, insert the handles, start. Desk workers specifically benefit from the yellow (back) and blue (shoulder) zones, which directly target the postural weaknesses that 8 hours of chair time creates.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Beginners who want structure without a gym membership</li>
                      <li>Women starting upper body training at home — wrist protection eliminates the #1 reason beginners quit</li>
                      <li>Apartment dwellers with limited space — folds to 20×25 cm, stores under a bed</li>
                      <li>Frequent travellers — fits in a carry-on, works in any hotel room. (No excuses when you're travelling anymore — sorry.)</li>
                      <li>Anyone with wrist pain who cannot do floor push-ups comfortably</li>
                      <li>Intermediate users who want to add structured variation to an existing routine</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">About PulGos — Brand & Product Background</h3>
                    <p>PulGos is an Indian fitness brand, sold via RetailEZ Pvt Ltd, manufactured by Swastik Overseas in Delhi. They make one hero product. They're very good at it. This board has held #1 in the Push-Up Stands category on Amazon India with 6,000+ monthly purchases and a maintained bestseller badge. At ₹299, it's competitively priced against similar-spec boards from TWINZFIT, FitHead, and ComfortFriends — and it holds the highest review count in the category. 6,000+ monthly purchases and a maintained #1 badge is the best third-party signal a fitness product can have. Reviews can be gamed; sustained purchase volume is harder to fake.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Buy via CouponsCrew</h3>
                    <p>We track Amazon pricing on this product and flag when bank card offers or UPI cashback stack on top of the base price. The deal link above goes directly to the verified Amazon listing. Check the offers tab on the product page — UPI cashback sometimes applies and most people don't catch it before checkout. Free to use, no registration.</p>
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
                    { q: "What is the PulGos Pushup Board?", a: "A push-up board with 15 colour-coded handle positions across 4 zones — red (chest), blue (shoulders), yellow (back/traps), green (triceps). Two handles, 15 slots, zero assembly. Supports up to 150 kg. At ₹299, it's the most accessible full-spectrum push-up tool in the Indian market." },
                    { q: "Is the pushup board suitable for beginners?", a: "It's actually built for beginners and ideal as a pushup board for home workout. Pick a colour zone, insert the handles, start. You don't need to understand push-up biomechanics — the board does that work for you. The neutral grip also protects wrists, the #1 reason beginners abandon floor push-ups." },
                    { q: "How much weight can the board support?", a: "Rated to 150 kg for controlled push-up movements. ABS plastic, reinforced fold hinge, rubber non-slip pads. Don't use it for plyometric (clapping) push-ups — it's designed for controlled movement, not impact loading." },
                    { q: "Where can I find PulGos coupon codes?", a: "CouponsCrew tracks this product's price on Amazon. The deal button links to the current live offer. Also check the offers section on the Amazon listing page — UPI cashback sometimes applies and is easy to miss before checkout." },
                    { q: "Is assembly required?", a: "None. Handles click into slots. That's it. Out of the box to your first rep in under 30 seconds." },
                    { q: "Is CouponsCrew free to use?", a: "Completely free. No registration. No premium tier. CouponsCrew tracks deals, price drops, and cashback offers across fitness equipment, skincare, fashion, and electronics. Just click the deal button." }
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular PulGos Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["15-in-1 Pushup Board", "Home Workout Equipment", "Foldable Push Up Stand", "Chest Workout at Home", "Push Up Board for Beginners", "Wrist-Friendly Push Ups", "#1 Best Seller Fitness", "CouponsCrew Fitness Deals"].map(tag => (
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top PulGos Deals</h3>
                  <div className="space-y-6">
                    {[
                      { heading: "PulGos 15-in-1 Pushup Board", sub: "#1 Best Seller — colour-coded positions for chest, shoulders, triceps & back" },
                      { heading: "PulGos Combo with Grip Strengthener", sub: "Pushup board + finger grip kit — full upper body starter pack" },
                      { heading: "Resistance Bands Set", sub: "Add progressive overload to your pushup board routine" },
                      { heading: "Yoga Mat (Non-Slip)", sub: "Essential for polished marble floors — prevents board sliding during sets" },
                      { heading: "Home Gym Starter Bundle", sub: "Pushup board + bands + ab roller — complete beginner home gym" }
                    ].map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">P</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get PulGos deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
