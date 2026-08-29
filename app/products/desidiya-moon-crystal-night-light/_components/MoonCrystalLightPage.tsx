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
              The Desidiya moon crystal night light features a 2.4 inch glass crystal ball set on an elegant wooden base, emitting a soft warm LED glow perfect for bedrooms, living rooms, or gifting. Its compact design makes it an ideal ambient light for relaxing evenings or a thoughtful decor gift for any occasion. An Amazon's Choice pick with adjustable brightness via touch switch.
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
                  Desidiya Moon Crystal Night Light — Complete Review & Gift Guide
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">What Is the Desidiya Moon Crystal Ball Night Light?</h3>
                  <p>
                    At ₹197, this lamp looks like it costs ₹900. That's the whole pitch. It's a 2.4-inch K9 optical glass sphere — the same high-clarity glass used in camera lenses — sitting on a natural wooden base, with a 3D laser-engraved moon carved inside the glass without breaking the surface. When the LED turns on from the base below, the moon detail appears to float inside the sphere. The glow is warm white. The effect is genuinely striking.
                  </p>
                  <p>
                    Desidiya is a Gurugram-based Indian home decor brand, founded in 2019. They sell across Amazon India, Flipkart, and quick-commerce platforms. The crystal ball range covers over a dozen themes — moon, galaxy, universe, astronaut, Lord Ganesha, dancing fairy — all using the same USB-powered wooden base system. This moon version is their bestseller. 5,500+ ratings. Amazon's Choice. (Heads up: 2.4 inches is smaller than most people picture. It's a compact accent piece, not a room-filling globe. Set your expectations accordingly and you won't be disappointed.)
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">How It Works — Light, Power & Touch Control</h3>
                    <p>Five things worth knowing before you plug it in:</p>
                    <p><strong>USB Powered, 2W:</strong> Plugs into any USB port — phone charger, power bank, laptop, USB hub. (Any 5V USB adapter works — the same one charging your phone right now.) No batteries. Running cost under ₹2/month at 8 hours daily.</p>
                    <p><strong>Warm White LED (2700K):</strong> Warm amber-gold tone — lower blue-light content than cool white, so it's gentler on eyes and less disruptive to sleep at night. That's not an accident; it's the design point.</p>
                    <p><strong>K9 Crystal Ball Lamp:</strong> High-clarity optical glass, excellent light transmission and refractive quality. Denser and more durable than regular glass — but it will break if dropped on a hard floor. Handle it like glassware, not a toy.</p>
                    <p><strong>Touch Dimmer:</strong> Capacitive sensor on the wooden base. Short tap: on/off. Hold: cycles through brightness levels. No mechanical parts to wear out.</p>
                    <p><strong>Natural Wooden Base:</strong> Mango wood or rubber wood — heavier than plastic, so it stays put. The USB cable routes internally through the base. The wood-and-glass contrast is the whole aesthetic.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-8">Setting Up & Getting the Best Glow</h3>
                    <p className="text-gray-700 font-bold -mt-4">Setup takes about 90 seconds. Most of that is finding a USB adapter.</p>
                    <div className="space-y-6">
                      {[
                        "Remove the crystal ball and wooden base from the packaging. The ball sits in a small socket on top of the base.",
                        "Connect the included USB cable to the base and plug it into any 5V USB port — your phone charger adapter, laptop, power bank, or USB hub all work.",
                        "Touch the base once. The crystal ball glows warm white. That's it.",
                        "To adjust brightness: touch and hold the base. It cycles through levels — release your finger at the brightness you want.",
                        "Turn off the overhead light. The glow is most striking when it's the only light source in the room — which is exactly the aesthetic people are buying this for.",
                        "Find your spot: bedside table, study desk, shelf, dressing table. Keep away from direct sunlight and out of reach of very young children."
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
                    <p>This lamp is a single accent piece and the ideal led night light for bedroom shelves — it's not replacing your overhead light, it's the thing that makes a plain shelf look styled. One lamp, right placement, completely different vibe.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Bedroom bedside table — most popular use; lowest brightness is ideal for sleeping with the light on</li>
                      <li>Study desk or workspace — calming ambient backdrop; works well as a video call background too</li>
                      <li>Kids' room shelf — comforting nightlight for children 5+; keep out of toddler reach</li>
                      <li>Dressing table or vanity — warm glow suits self-care routines</li>
                      <li>Living room bookshelf — decorative by day, glowing accent by night</li>
                      <li>Gifting tip: a moon night light gift photographs beautifully in a dark room — if you post room tours, this is your prop</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Gifting Guide — Who Is This Perfect For?</h3>
                    <p>A good gift does two things: it looks expensive and it's something the person wouldn't buy for themselves. This lamp is ₹197 and checks both boxes. At this price, you can gift two and still spend less than most candle sets.</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Valentine's Day and anniversaries — moon symbolism (romance, night sky, eternity) does the emotional work for you</li>
                      <li>Diwali — warm ambient glow fits the festival of lights aesthetic perfectly</li>
                      <li>Birthdays for teens and young adults (13–30) — directly aligned with the "aesthetic bedroom" trend they're all building</li>
                      <li>Housewarming — compact, universally likeable, looks considered without being expensive</li>
                      <li>Raksha Bandhan or "going-to-college" gift for siblings moving to a hostel or PG</li>
                      <li>Teacher's Day, Boss Day — desk decor that's thoughtful without being too personal</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Honest Assessment — What Buyers Say</h3>
                    <p>5,500+ ratings. Amazon's Choice. 1,000+ monthly buyers. The numbers are there. Buyers consistently use words like "magical," "looks expensive," and "better than expected" — the touch dimmer, USB convenience, and warm glow quality are the three things praised most.</p>
                    <p>The #1 complaint is size. The 2.4-inch (6 cm) ball is stated clearly in the listing — but people picture something bigger. It's 6 cm. Roughly the size of a golf ball. It's a compact accent piece, not a room-filling globe. Set that expectation before you gift it. Also: the USB adapter is not included — only the cable. Use any phone charger you already own.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Buy via CouponsCrew</h3>
                    <p>We track this product through the Great Indian Festival, Prime Day, and Diwali sales — when it has dropped below ₹150. Whether you're buying this crystal ball lamp for yourself or as a gift — the deal button links to the current live price. Check the cart page for any coupon tick before completing checkout. Free, no sign-up required.</p>
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
                    { q: "What is the Desidiya Moon Crystal Night Light?", a: "A 2.4-inch K9 glass ball with a 3D laser-engraved moon inside, sitting on a natural wooden base, glowing warm white via USB. It's a mood lamp. An accent piece. One of the better gifts under ₹500 in India right now — 5,500+ ratings and Amazon's Choice back that up." },
                    { q: "How is the light powered?", a: "USB, 5V, 2W. Plug into any phone charger, laptop port, or power bank. No adapter in the box — use what you already own. Running cost is under ₹2/month at 8 hours daily." },
                    { q: "Is this a good gifting option?", a: "Yes. Whether they need a led night light for bedroom ambience or just a thoughtful decor piece — this delivers. The K9 glass, 3D engraving, wooden base, and warm glow create a perceived value well above ₹197. Works for Valentine's Day, Diwali, birthdays, housewarmings. At this price, you can afford to gift two." },
                    { q: "Where can I find Desidiya coupon codes?", a: "CouponsCrew monitors this product through festive sales — Great Indian Festival and Prime Day have dropped the price below ₹150 historically. The deal button links to the current best offer. Also check the Amazon cart page after adding to cart — sometimes there's an extra tick discount above the price that's easy to miss." },
                    { q: "Is the light bright enough for reading?", a: "No. 2W is ambient light — it sets a mood, it doesn't illuminate a textbook. Use a desk lamp for reading. Use this for everything else: sleeping with a nightlight on, winding down, video call backgrounds, shelf decor." },
                    { q: "Is CouponsCrew free to use?", a: "Completely free. No registration. No premium tier. Just deals." }
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
