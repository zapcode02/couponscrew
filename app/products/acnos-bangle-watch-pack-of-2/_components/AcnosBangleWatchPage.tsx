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
  Gem,
  Watch,
  Gift,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

export default function AcnosBangleWatchPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const productImages = [
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    'https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=600&q=80',
    'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80'
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

  const relatedProducts = [
    {
      name: 'Acnos Rose Gold Analog Watch',
      price: 399,
      originalPrice: 999,
      discount: 60,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&q=80',
      rating: 4.1
    },
    {
      name: 'Acnos Crystal Studded Bangle Watch',
      price: 449,
      originalPrice: 1199,
      discount: 62,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&q=80',
      rating: 4.0
    },
    {
      name: 'Acnos Pack of 3 Combo Watches',
      price: 599,
      originalPrice: 1499,
      discount: 60,
      image: 'https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=300&q=80',
      rating: 4.2
    },
    {
      name: 'Acnos Floral Charm Bangle Watch',
      price: 379,
      originalPrice: 949,
      discount: 60,
      image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=300&q=80',
      rating: 4.3
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
              <h4 className="text-lg font-black text-[#1A1A2E]">1 Year Warranty</h4>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                Covered by a 1-year manufacturer warranty against manufacturing defects, plus a 10-day return window. Contact Acnos support for quick processing.
              </p>
            </div>
          </div>
        </div>

        {/* More products section */}
        <div className="space-y-6 mb-10">
          <div className="flex justify-between items-end border-b border-gray-200 pb-3">
            <h3 className="text-xl font-black text-[#1A1A2E]">More Fashion Watches You'll Love</h3>
            <Link href="/products?category=fashion" className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest hover:underline flex items-center gap-1.5">
              <span>View All Watches</span>
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
                  Acnos Coupon Codes, Promo Codes & Fashion Watch Deals
                </h2>

                <div className={cn("text-gray-500 font-bold leading-relaxed space-y-6 relative", !isReadMore && "max-h-[500px] overflow-hidden")}>
                  <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Accessorize for Less with Acnos Coupon Codes</h3>
                  <p>
                    A great watch can elevate any outfit, whether it's for everyday wear or a special occasion. With the latest <strong>Acnos coupon codes</strong>, CouponScrew helps fashion-conscious shoppers discover savings on stylish bangle watches and accessories. This Pack of 2 Heart Shape Bangle Watch combo is a popular pick for those who love mixing and matching their accessories.
                  </p>
                  <p>
                    From elegant analog dials to comfortable bangle-style straps, Acnos designs watches that combine everyday usability with feminine style. Before placing your next order, browse CouponScrew for the latest promo codes, discounts, and combo offers.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Choose This Bangle Watch Combo?</h3>
                    <p><strong>Pack of 2 Value:</strong> Get two stylish watches in one combo, perfect for switching up your look daily.</p>
                    <p><strong>Heart-Shaped Dial:</strong> A distinctive, feminine design that stands out from regular round watches.</p>
                    <p><strong>Comfortable Bangle Fit:</strong> The adjustable cuff design sits comfortably on the wrist without a traditional clasp.</p>
                    <p><strong>Versatile Styling:</strong> Works well with both casual outfits and party wear.</p>
                    <p><strong>Great Gifting Option:</strong> A thoughtful and affordable gift for birthdays, festivals, or special occasions.</p>
                  </div>

                  {/* How to Use Steps */}
                  <div className="space-y-8 bg-white p-10 rounded-[40px] border border-[#f0f0f0] shadow-sm my-12">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-8">How to Use an Acnos Coupon Code</h3>
                    <p className="text-gray-700 font-bold -mt-4">Saving on your next accessory purchase is quick and easy.</p>
                    <div className="space-y-6">
                      {[
                        "Step 1: Visit CouponScrew — Browse the latest Acnos coupon codes and promotional offers.",
                        "Step 2: Choose a Deal — Select the offer that best matches your purchase.",
                        "Step 3: Copy the Coupon Code — Copy the available promo code before visiting the store.",
                        "Step 4: Shop Your Favorite Watch — Add the bangle watch combo to your cart.",
                        "Step 5: Apply the Coupon — Paste the coupon code during checkout if applicable.",
                        "Step 6: Complete Your Order — Finish your purchase and accessorize your look."
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
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Smart Ways to Save More on Watches</h3>
                    <p className="text-gray-700 font-bold">Want to maximize your savings? Here are a few practical tips.</p>
                    <p><strong>Check CouponScrew Before Every Purchase:</strong> New Acnos promo codes and seasonal offers may become available throughout the year.</p>
                    <p><strong>Shop During Festive Sales:</strong> Major shopping events often feature additional discounts on fashion accessories.</p>
                    <p><strong>Buy in Packs:</strong> Combo packs like this one usually offer better value per watch than buying individually.</p>
                    <p><strong>Plan Gifts Ahead:</strong> Buying accessories before festivals or birthdays helps you avoid last-minute price hikes.</p>
                    <p><strong>Join Brand Updates:</strong> Subscribing to newsletters can help you stay informed about future launches and exclusive offers.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why a Good Watch Combo Matters</h3>
                    <p>Investing in versatile, well-designed watches can elevate your everyday style.</p>
                    <p className="text-gray-700 font-bold">A good watch combo helps you:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-500 font-bold">
                      <li>Switch styles to match different outfits</li>
                      <li>Add a feminine, fashionable touch to your look</li>
                      <li>Save money compared to buying multiple watches separately</li>
                      <li>Have a backup ready when one watch needs charging or repair</li>
                      <li>Gift a thoughtful accessory set to loved ones</li>
                    </ul>
                    <p>Whether you're building your accessory collection or shopping for a gift, choosing a well-designed combo can enhance your overall experience.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Why Use CouponScrew for Acnos Deals?</h3>
                    <p className="text-gray-700 font-bold">CouponScrew helps shoppers discover valuable savings across fashion, accessories, technology, and lifestyle brands.</p>
                    <p><strong>Updated Discounts:</strong> We regularly update available Acnos promotions and coupon codes.</p>
                    <p><strong>Easy-to-Find Deals:</strong> Browse offers in one convenient location before making your purchase.</p>
                    <p><strong>Completely Free:</strong> CouponScrew is free to use whenever you're searching for ways to save.</p>
                    <p><strong>Trusted Brands:</strong> In addition to fashion watches, CouponScrew features savings from hundreds of popular brands across multiple shopping categories.</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-[#5B4FBE] mb-4">Upgrade Your Accessory Collection Today</h3>
                    <p>Whether you're shopping for yourself or picking out a gift, a stylish bangle watch combo can make any outfit complete.</p>
                    <p>Browse the latest Acnos coupon codes, promo offers, and fashion watch deals on CouponScrew today and save on the accessories you love.</p>
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
                    { q: "What is included in the Acnos Pack of 2?", a: "The pack includes two heart-shaped analog bangle watches, allowing you to mix and match styles for different occasions." },
                    { q: "Is this watch suitable for everyday wear?", a: "Yes, the bangle-style design and durable build make it suitable for both casual everyday wear and special occasions." },
                    { q: "Does the bangle watch have an adjustable strap?", a: "The bangle cuff design is made to comfortably fit most wrist sizes without a traditional clasp mechanism." },
                    { q: "Where can I find Acnos coupon codes?", a: "You can browse the latest Acnos coupon codes, promo offers, and fashion watch deals on CouponScrew." },
                    { q: "Is this a good gifting option?", a: "Yes, the elegant heart-shaped design and pack-of-2 value make it a popular and affordable gifting choice." },
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Popular Acnos Searches</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {["Bangle Watch Combo", "Acnos Promo Code", "Heart Shape Watch", "Girls Analog Watch", "Watch Pack of 2", "Fashion Accessories", "Gift for Her", "CouponScrew Fashion"].map(tag => (
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
                  <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">Today's Top Acnos Deals</h3>
                  <div className="space-y-6">
                    {[
                      { heading: "Watch Combo Bundle", sub: "Save up to 30% when bundling multiple bangle watch packs" },
                      { heading: "First Order Promo Code", sub: "Special percentage metrics adjusted on introductory store registrations" },
                      { heading: "Complimentary Delivery", sub: "Standard logistics handling applied cleanly over minimum budget parameters" },
                      { heading: "Festive Accessory Sale", sub: "Limited-time price reductions on selected watches and accessories" },
                      { heading: "CouponScrew Active Coupon", sub: "Instant validation code application calculated cleanly during check out" }
                    ].map((deal, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#5B4FBE] font-black text-xl italic shadow-inner">A</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-black text-[11px] uppercase tracking-widest leading-none group-hover:text-[#5B4FBE] transition-colors">{deal.heading}</p>
                          <p className="text-gray-600 font-medium text-[12px] truncate leading-none mt-0.5 normal-case">{deal.sub}</p>
                        </div>
                        <a href="https://amzn.to/4gbffUx" target="_blank" rel="noopener noreferrer nofollow sponsored" aria-label={`Get Acnos deal: ${deal.heading}`} className="bg-[#e8f6f8] text-[#0451c4] px-3.5 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-[#5B4FBE] hover:text-white transition-all active:scale-90">Get Deal</a>
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
                href="https://amzn.to/4gbffUx"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() => setShowModal(false)}
                className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Continue to Acnos</span>
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
