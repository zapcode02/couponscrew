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
  Moon,
  Lightbulb,
  Gift,
  TreeDeciduous
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const AFFILIATE_URL = 'https://amzn.to/4bdFyGa';

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

export default function MoonCrystalLightPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const productImages = [
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162551/61XWYda0HoL._SL1500__klyexw.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162555/71og2p8A8zL._AC_UC154_154_CACC_154_154_QL85__allqrg.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162560/71PKTOkjaqL._AC_UC154_154_CACC_154_154_QL85__ezyxe4.jpg',
    'https://res.cloudinary.com/dqjlffxja/image/upload/v1783162565/61_L9a7xG8L._AC_UC154_154_CACC_154_154_QL85__x5efiq.jpg',
  ];

  const specifications = [
    { key: 'Brand', value: 'Desidiya' },
    { key: 'Finish Type', value: 'Polished' },
    { key: 'Base Material', value: 'Wood' },
    { key: 'Bulb Base', value: 'GU4' },
    { key: 'Product Dimensions', value: '5D x 5W x 5H cm' },
    { key: 'Item Weight', value: '0.2 Kilograms' },
    { key: 'Shade Colour', value: 'Gold' },
    { key: 'Switch Type', value: 'Touch' },
    { key: 'Style', value: 'Modern' },
    { key: 'Return Policy', value: '10 Days Returnable' }
  ];

  const keyFeatures = [
    'Mesmerizing 2.4-Inch Glass Ball on a Sleek Wooden Base',
    'Soft, Soothing Glow Creates a Tranquil, Relaxing Ambience',
    'Versatile Gift for Men, Women, Kids & Couples',
    'Adjustable Brightness to Suit Your Mood',
    'Touch Switch — Easy to Set Up, No Complex Wiring',
    'Doubles as a Functional Light & Decor Piece',
    'Durable LED Construction for Long-Lasting, Eco-Friendly Use'
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
          <span className="text-[#5B4FBE] font-semibold">Desidiya Moon Crystal Night Light</span>
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
                  <img src={img} alt={`Desidiya Moon Crystal Night Light Thumbnail ${i + 1}`} className="w-full h-full object-contain mix-blend-multiply rounded-lg" />
                </button>
              ))}
            </div>

            {/* Main Image Display Box */}
            <div className="flex-1 bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl aspect-square flex items-center justify-center p-6 relative overflow-hidden group">
              {/* Discount Stamp badge */}
              <div className="absolute top-4 left-4 bg-[#FF5722] text-white text-[11px] font-black px-3 py-1 rounded-lg shadow-sm tracking-wide select-none uppercase">
                90% OFF
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
                alt="Desidiya Moon Crystal Ball Night Light"
                className="max-h-[90%] max-w-[90%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT: Product Details Column */}
          <div className="lg:col-span-6 text-left space-y-5">
            <span className="bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider select-none">
              Home Decor & Gifting
            </span>

            <div className="space-y-2">
              <h1 className="text-3xl font-black text-[#1A1A2E] leading-tight">
                Desidiya Moon Crystal Ball Night Light
              </h1>
              <p className="text-sm font-semibold text-gray-400">
                2.4 Inch Glass Ball LED Lamp with Wooden Base
              </p>
            </div>

            {/* Rating Stars section */}
            <div className="flex items-center gap-4 select-none">
              <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-3 py-1 rounded-full text-xs font-bold border border-[#FFE7B3]">
                <Star size={14} className="fill-current" />
                <span>4.0 / 5</span>
              </div>
              <span className="text-xs text-gray-400 font-semibold">(5,514 Ratings)</span>
              <span className="text-xs text-gray-400 font-semibold">|</span>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100 uppercase">1K+ Bought This Month</span>
            </div>

            {/* Price section */}
            <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none block">Best Deal Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#1A1A2E]">₹197</span>
                  <span className="line-through text-sm text-gray-400 font-medium">₹1,999</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-emerald-600 font-black tracking-widest uppercase block">Total Savings</span>
                <span className="text-base font-black text-emerald-600">Save ₹1,802 (90%)</span>
              </div>
            </div>

            {/* Availability details */}
            <div className="flex items-center gap-6 py-1 select-none">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A1A2E]">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full inline-block animate-pulse"></span>
                <span>Amazon's Choice</span>
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
              The Desidiya Moon Crystal Ball Night Light features a 2.4 inch glass crystal ball set on an elegant wooden base, emitting a soft warm LED glow perfect for bedrooms, living rooms, or gifting. Its compact, minimal design makes it an ideal ambient light for relaxing evenings or a thoughtful decor gift for any occasion. An Amazon's Choice pick with adjustable brightness via touch switch.
            </p>

            {/* Row of Icon Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'Crystal Ball', icon: Moon, desc: '2.4 Inch Glass' },
                { label: 'Warm LED Glow', icon: Lightbulb, desc: 'Soothing Ambience' },
                { label: 'Wooden Base', icon: TreeDeciduous, desc: 'Premium Finish' },
                { label: 'Gift Ready', icon: Gift, desc: 'Perfect for Gifting' }
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
              <h4 className="text-lg font-black text-[#1A1A2E]">10-Day Returnable</h4>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                This night light is returnable within 10 days of delivery. Fulfilled and delivered by Amazon, backed by secure transaction protection.
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
                  Desidiya Moon Crystal Ball Night Light — Complete Review & Gift Guide
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">What Is the Desidiya Moon Crystal Ball Night Light?</h3>
                  <p>
                    The Desidiya Moon Crystal Ball Night Light is a 2.4-inch (6 cm) K9 optical glass sphere set on a natural wooden base, emitting a warm white LED glow that fills a room with soft, ambient light. The glass ball contains a 3D laser-engraved moon design — carved sub-surface by laser without breaking the outer surface — so the lunar detail appears to float inside the sphere when lit. The LED is embedded in the wooden base and shines upward through the glass, diffracting and scattering through the engraved internal pattern.
                  </p>
                  <p>
                    The result is the kind of atmospheric glow that makes a bedroom feel genuinely different at night — not the flat brightness of an overhead light, but a warm focal point that draws the eye and creates calm. Desidiya is a Gurugram-based Indian home decor brand founded in 2019, selling primarily on Amazon India, Flipkart, and quick-commerce platforms. Their crystal ball range covers over a dozen themes — moon, galaxy, universe, astronaut, Lord Ganesha, dancing fairy — all using the same USB-powered wooden base system.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">How It Works — Light, Power & Touch Control</h3>
                    <p><strong>USB Powered, 2W:</strong> Plugs into any USB port — phone charger, power bank, laptop, or USB adapter. No batteries, no separate adapter required. Running cost is negligible — under ₹2/month at 8 hours daily.</p>
                    <p><strong>Warm White LED (2700K):</strong> The warm amber-gold tone is deliberately chosen to match the "moonlight" aesthetic. 2700K warm white has lower blue-light content than cool white, making it gentler on eyes and less disruptive to sleep when used as a bedside nightlight.</p>
                    <p><strong>K9 Optical Glass Ball:</strong> The sphere is made from K9 glass — a high-clarity optical glass known for excellent light transmission and refractive quality. It is denser and more durable than regular glass, though still breakable if dropped on hard floors.</p>
                    <p><strong>Touch Dimmer:</strong> A capacitive touch sensor on the wooden base responds to finger contact. Short tap: on/off. Hold: cycles through brightness levels using PWM (Pulse Width Modulation) dimming. Works in complete darkness; no mechanical parts to wear out.</p>
                    <p><strong>Natural Wooden Base:</strong> The base is made from mango wood or rubber wood — natural materials that provide stability (heavier than plastic), hide the USB cable routing internally, and create the warm aesthetic contrast between glass and wood that defines this product's appeal.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-8">Setting Up & Getting the Best Glow</h3>
                    <p className="text-gray-700 font-bold -mt-4">Getting this lamp working and looking its best takes under two minutes.</p>
                    <div className="space-y-6">
                      {[
                        "Remove the crystal ball and wooden base from the packaging. The ball sits in a small slot/socket on top of the base.",
                        "Connect the included USB cable to the base and plug it into any 5V USB port — a phone charger adapter, laptop, power bank, or USB hub all work.",
                        "Touch the base once to turn the light on. The crystal ball will glow with a warm white light.",
                        "To adjust brightness: touch and hold the base. The lamp will cycle through brightness levels — release your finger at the desired level.",
                        "For best visual effect: dim the room lights or use in a darkened space. The 2.4-inch ball creates a striking ambient glow that is most visible when it is the dominant light source in the room.",
                        "Place on a bedside table, study desk, shelf, or dressing table. Keep away from direct sunlight and out of reach of young children."
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
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Where It Looks Best — Placement Guide</h3>
                    <p>The Moon Crystal Ball Night Light works best as a single accent piece in a dimmer setting — not a replacement for overhead lighting, but a complement that transforms the character of a room. On a bedside table, it creates a soothing wind-down glow at the lowest brightness setting. On a study desk, it adds personality without distracting from work. On a living room shelf or console, it serves as a decorative object during the day and a glowing accent at night.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Bedroom bedside table — most popular use; lowest brightness is ideal for sleeping with the light on</li>
                      <li>Study desk or workspace — calming ambient backdrop; increasingly popular for video call backgrounds</li>
                      <li>Kids' room shelf — comforting nightlight for older children (5+); keep out of toddler reach</li>
                      <li>Dressing table or vanity — warm glow complements self-care routines</li>
                      <li>Living room bookshelf — decorative accent that doubles as a conversation piece</li>
                      <li>Gifting note: the lamp photographs beautifully in a dark room — useful if you plan to take an "unboxing" or room-tour photo</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Gifting Guide — Who Is This Perfect For?</h3>
                    <p>This lamp is one of the best-performing gift items in Indian home decor under ₹500 — it looks like it costs significantly more than it does. The glass + wood combination, the 3D moon engraving, and the warm glow create an unboxing experience that feels premium. At ₹197, it is accessible as a return gift, an impulse birthday present, or a thoughtful add-on.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Valentine's Day and anniversaries — moon symbolism (romance, night sky, eternity) makes this a natural gift</li>
                      <li>Diwali — ambient lighting aligns with the festival of lights; warm glow adds to festive decor</li>
                      <li>Birthdays for teens and young adults (13–30) — aligns strongly with Gen Z "aesthetic bedroom" preferences</li>
                      <li>Housewarming gifts — new home, new decor; compact and universally likeable</li>
                      <li>Raksha Bandhan farewell or "going-to-college" gift for siblings moving to a hostel or PG</li>
                      <li>Teacher's Day, Boss Day — appropriate desk decor that is neither too personal nor too generic</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Honest Assessment — What Buyers Say</h3>
                    <p>Buyers consistently highlight the visual impact at the price point — words like "magical," "beautiful," and "looks expensive" appear repeatedly across reviews. The touch dimmer, USB convenience, and warm glow quality are praised. With 5,500+ ratings and an Amazon's Choice badge, buyer confidence is well-supported by real purchase volume (1,000+ per month).</p>
                    <p>The most common complaint is size — the 2.4-inch (6 cm) ball is accurately stated in the listing but smaller than many buyers imagine. If you are expecting a large statement lamp, this is a compact accent piece, not a room-filling globe. Brightness is intentionally low (2W ambient), not functional task lighting. Some buyers mention the USB adapter is not included — only the USB cable — which requires a separate charger.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Buy via CouponsCrew</h3>
                    <p>CouponsCrew tracks live Amazon India pricing for this product, which has historically seen significant discounts during the Great Indian Festival, Prime Day, and Diwali sales — sometimes dropping below ₹150. The deal link above takes you directly to the verified Amazon listing. Check at checkout for additional coupon ticks. Free to use, no sign-up required.</p>
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
                    { q: "What is the Desidiya Moon Crystal Night Light?", a: "A 2.4-inch K9 optical glass ball with a 3D laser-engraved moon design, set on a natural wooden base. A USB-powered LED in the base shines upward through the glass, creating a warm white ambient glow with the moon detail visible inside the sphere. It is used as a bedroom nightlight, desk decor, and gift item." },
                    { q: "How is the light powered?", a: "USB powered at 5V, 2W. The included USB cable connects to any standard USB port — a phone charger adapter, laptop port, power bank, or USB hub. No batteries required. No wall adapter is included in the box; use any 5V USB adapter you already own." },
                    { q: "Is this a good gifting option?", a: "Yes — consistently. The combination of K9 glass, 3D engraving, wooden base, and warm glow creates a perceived value significantly higher than the actual price. It is well-suited for Valentine's Day, Diwali, birthdays (especially teens and young adults), housewarmings, Raksha Bandhan, and farewell gifts. With 5,500+ ratings and Amazon's Choice designation, it is a well-validated gift purchase." },
                    { q: "Where can I find Desidiya coupon codes?", a: "CouponsCrew monitors Amazon India pricing for Desidiya products including this crystal ball lamp. The deal button above links to the current live offer. Check the checkout page on Amazon for additional coupon ticks — promotional discounts during festive sales (Great Indian Festival, Prime Day) can reduce the price further." },
                    { q: "Is the light bright enough for reading?", a: "No — and it is not designed for that. The 2W LED is optimised for soft ambient illumination, not task lighting. It is best used as a mood or accent light in a dimmer room. For reading, a dedicated desk lamp is needed alongside it. At the lowest brightness setting, it functions as a sleep-friendly nightlight; at maximum, it creates a warm focal glow in the room." },
                    { q: "Is CouponsCrew free to use?", a: "Yes, completely free. CouponsCrew helps Indian shoppers find verified price drops, deals, and coupon codes across home decor, skincare, fashion, electronics, and more. No registration required to access any deal." }
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Desidiya Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Moon Crystal Ball Lamp", "LED Night Light Gift", "Warm White Ambient Lamp", "Bedroom Decor India", "Desidiya Night Light", "Aesthetic Room Decor", "Diwali Gift Ideas", "CouponsCrew Home Decor"].map(tag => (
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Desidiya Deals</h3>
                  <div className="space-y-6">
                    {[
                      { heading: "Moon Crystal Ball Night Light", sub: "3D laser-engraved moon, USB powered, touch dimmer — Amazon's Choice" },
                      { heading: "Desidiya Galaxy Crystal Ball", sub: "Same wooden base system, galaxy engraving for cosmic bedroom vibes" },
                      { heading: "Crystal Ball Diwali Gift Pack", sub: "Moon + Universe combo — bundle both for a premium gifting set" },
                      { heading: "LED Ambient Desk Lamp", sub: "Warm white accent lighting for study desks and work-from-home setups" },
                      { heading: "Home Decor Deals Under ₹500", sub: "Browse the best ambient lighting and gifting deals on CouponsCrew" }
                    ].map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">D</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Desidiya deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
