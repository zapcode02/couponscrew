'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  Dumbbell,
  Home,
  Shirt,
  ShoppingBag,
  Sparkles,
  Search,
  Tag,
  LayoutGrid,
  Package,
  Smartphone,
  Laptop,
  Utensils,
  Plane,
  Activity,
  HeartPulse,
  BookOpen,
  Tv,
  Baby,
  Footprints,
  HelpCircle,
  TrendingUp,
  ArrowRight,
  Layers,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PRODUCT_CATEGORIES = [
  {
    slug: 'exercise-and-fitness',
    name: 'Exercise & Fitness',
    description: 'Workout gear, fitness equipment, and health accessories to fuel your active lifestyle.',
    icon: Dumbbell,
    productCount: 1,
    color: '#FF5722',
    bg: '#1a56db',
    image: null,
  },
  {
    slug: 'home-and-kitchen',
    name: 'Home & Kitchen',
    description: 'Décor, lighting, and kitchen essentials to make your home a better place.',
    icon: Home,
    productCount: 1,
    color: '#5B4FBE',
    bg: '#1a56db',
    image: null,
  },
  {
    slug: 'clothing-and-accessories',
    name: 'Clothing & Accessories',
    description: 'Kurtas, watches, and everyday wearables at verified Amazon deals.',
    icon: Shirt,
    productCount: 2,
    color: '#D2691E',
    bg: '#1a56db',
    image: null,
  },
  {
    slug: 'fashion',
    name: 'Fashion',
    description: 'Trending fashion picks for men and women — verified prices, real savings.',
    icon: ShoppingBag,
    productCount: 2,
    color: '#FF3F6C',
    bg: '#1a56db',
    image: null,
  },
  {
    slug: 'beauty',
    name: 'Beauty',
    description: 'Skincare kits and beauty products from trusted brands at the best prices.',
    icon: Sparkles,
    productCount: 1,
    color: '#22C55E',
    bg: '#1a56db',
    image: null,
  },
];

export default function ProductCategories() {
  const [search, setSearch] = useState('');

  const filtered = PRODUCT_CATEGORIES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalProducts = PRODUCT_CATEGORIES.reduce((s, c) => s + c.productCount, 0);

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative w-full bg-[#f0eeff] overflow-hidden border-b border-[#E8E8F0] py-8 md:py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

          {/* Left */}
          <div className="lg:col-span-6 space-y-5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#4A4A6A]">
              <Link href="/" className="hover:text-[#5B4FBE] font-medium transition-colors">Home</Link>
              <ChevronRight size={13} className="text-gray-400" />
              <span className="text-[#5B4FBE] font-semibold">All Categories</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A2E] tracking-tight leading-tight">
              All Categories
            </h1>

            <p className="text-[#4A4A6A] text-sm md:text-base leading-relaxed max-w-xl">
              Find verified deals across every category — fashion, fitness, home, beauty, and everything in between.
            </p>

            {/* Search bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a category..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-[#E8E8F0] focus:border-[#5B4FBE] rounded-2xl text-sm focus:outline-none text-[#1A1A2E] font-medium placeholder:text-gray-400 transition-colors shadow-xs"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#5B4FBE] hover:bg-[#4a3fad] text-white p-1.5 rounded-xl transition-colors">
                <Search size={14} />
              </button>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs">
                <div className="bg-[#F0EEFF] p-2 rounded-xl text-[#5B4FBE] shrink-0">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">{PRODUCT_CATEGORIES.length}+</div>
                  <div className="text-[10px] text-[#4A4A6A] mt-0.5 font-medium uppercase tracking-wider">Categories</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs">
                <div className="bg-[#FFF2ED] p-2 rounded-xl text-[#FF5722] shrink-0">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">{totalProducts}+</div>
                  <div className="text-[10px] text-[#4A4A6A] mt-0.5 font-medium uppercase tracking-wider">Products</div>
                </div>
              </div>

              <div className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xs">
                <div className="bg-[#EAFDF3] p-2 rounded-xl text-[#22C55E] shrink-0">
                  <Tag className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-[#1A1A2E] text-sm leading-none">100%</div>
                  <div className="text-[10px] text-[#4A4A6A] mt-0.5 font-medium uppercase tracking-wider">Verified Deals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — hero image */}
          <div className="hidden lg:col-span-6 lg:flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-[4/3]">
              <NextImage
                src="https://res.cloudinary.com/dgy1atvb8/image/upload/v1782636941/all-categories_gyvk7u.webp"
                alt="Browse all product categories on CouponScrew"
                fill
                sizes="(max-width: 1024px) 0px, 448px"
                className="object-contain"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── CATEGORIES GRID ──────────────────────────────── */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-8">
            <h2 className="text-2xl font-black text-[#1A1A2E]">All Categories</h2>
            <p className="text-sm text-[#4A4A6A] mt-1">{filtered.length} {filtered.length === 1 ? 'category' : 'categories'} available</p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-[#4A4A6A]">
              <Search size={36} className="mx-auto mb-3 text-gray-300" />
              <p className="font-bold text-[#1A1A2E]">No categories found for &quot;{search}&quot;</p>
              <button onClick={() => setSearch('')} className="mt-4 text-xs text-[#5B4FBE] font-bold underline">Clear search</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.slug}
                    href={`/products/categories/${cat.slug}`}
                    className="group bg-white rounded-3xl border border-[#E8E8F0] overflow-hidden hover:shadow-xl hover:border-[#5B4FBE] transition-all duration-300 flex flex-col"
                  >
                    {/* Blue image / placeholder banner */}
                    <div className="relative h-44 bg-[#1a56db] flex items-center justify-center overflow-hidden">
                      {cat.image ? (
                        <NextImage
                          src={cat.image}
                          alt={cat.name}
                          fill
                          sizes="(max-width: 640px) 90vw, 400px"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <Icon size={64} className="text-white/30" />
                      )}

                      {/* Product count badge */}
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[11px] font-extrabold px-3 py-1 rounded-full">
                        {cat.productCount} {cat.productCount === 1 ? 'PRODUCT' : 'PRODUCTS'}
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <div>
                        <h2 className="font-extrabold text-[#1A1A2E] text-lg group-hover:text-[#5B4FBE] transition-colors leading-tight">
                          {cat.name}
                        </h2>
                        <p className="text-xs text-[#4A4A6A] mt-1.5 leading-relaxed">{cat.description}</p>
                      </div>

                      <div className="flex items-center gap-1 text-sm font-extrabold text-[#5B4FBE] group-hover:gap-2 transition-all mt-auto pt-2 border-t border-[#E8E8F0]">
                        <span>View All Deals</span>
                        <ChevronRight size={15} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

          <section className="bg-[#F8F8FF] py-16 px-6 border-t border-[#E8E8F0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

        {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
        <div className="lg:col-span-7 space-y-10">

          {/* ARTICLE BLOCK 1 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Category Overview</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Shop by Category — Find Deals Across Every Section
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Not every shopper knows exactly which store they want. But almost every shopper knows what they want to buy.
              </p>
              <p>
                That is exactly what Couponscrew&apos;s Categories page is built for. Instead of searching by brand or store, you start with what you are shopping for — and Couponscrew shows you every active deal, coupon code, and discount available across that entire category, from every relevant brand, all in one place.
              </p>
              <p>
                Looking to upgrade your phone? Head to Mobiles & Tablets and see deals from Amazon, Flipkart, Samsung, OnePlus, and more — all on a single page. Want to refresh your wardrobe? Open Fashion & Clothing and browse active discounts from Myntra, AJIO, Meesho, and dozens of other fashion platforms simultaneously.
              </p>
              <p>
                Right now, Couponscrew covers deals across major categories that shoppers spend on every day. And that is just the beginning. We are continuously adding new categories as the platform grows — from niche interest segments to deal categories that no other coupon platform currently covers. Compared to other discount code sites, this breadth is one of the things that sets Couponscrew apart.
              </p>
              <p>
                Bookmark this page. Every time we add a new category, it appears here first.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 2 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Hub Mechanics</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How Category Pages Work on Couponscrew
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Every category on this page is not just a label — it is a fully maintained deal hub. That is the standard the best coupon code sites are judged by. Here is what you get when you click into any category on Couponscrew.
              </p>
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>All active deals in one view.</strong> A category page pulls together every live coupon code, discount offer, cashback deal, and product deal available within that category — across all relevant stores and brands simultaneously. You do not need to visit ten different store pages to compare. One category page does that work for you.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Subcategory filtering.</strong> Major categories contain subcategories that let you drill down further. Electronics contains subcategories like Earbuds, Smartwatches, Laptops, and Cameras. Fashion contains Men, Women, Kids, Footwear, and Accessories. The deeper you go, the more specific and relevant the deals become.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Store tags on every deal.</strong> Every deal within a category shows which store it is from — so you can instantly compare what Amazon is offering versus what Flipkart is offering for the same type of product. Cross-store comparison within a single category is one of the most useful features Couponscrew offers.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Deals updated in real time.</strong> Categories are not static pages. As new deals go live within a category, they appear immediately. As deals expire, they are removed. The category page you are viewing right now reflects the current deal landscape — not what was available last week.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>New subcategories added regularly.</strong> As Couponscrew expands, existing categories will grow deeper with new subcategories. A Beauty category that starts with Skincare and Haircare will eventually include Fragrance, Men&apos;s Grooming, Organic Beauty, and more. Every expansion gets added to the relevant category page automatically.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ARTICLE BLOCK 3 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF9900] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF9900] uppercase tracking-widest">Directory Indices</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Current Categories on Couponscrew
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Here is a look at the major categories currently live on Couponscrew, along with what kinds of deals and brands you will find within each:
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Smartphone className="w-4 h-4 text-[#FF9900]" />,
                  title: "Mobiles & Tablets",
                  body: "Deals on smartphones, basic phones, tablets, and accessories from Amazon, Flipkart, Samsung, Apple, OnePlus, Realme, Xiaomi, and Vivo. This is one of the highest-traffic categories on Couponscrew — and one where deals can save you significantly on a single purchase."
                },
                {
                  icon: <Laptop className="w-4 h-4 text-[#2874F0]" />,
                  title: "Laptops & Computers",
                  body: "Laptop deals from Dell, HP, Lenovo, Asus, Apple, and Acer. Desktop computers, monitors, keyboards, mice, and peripheral accessories. Deals here tend to run deep during back-to-school season, festive sales, and year-end clearances."
                },
                {
                  icon: <ShoppingBag className="w-4 h-4 text-[#10B981]" />,
                  title: "Electronics & Gadgets",
                  body: "Earbuds, headphones, smartwatches, speakers, cameras, smart TVs, streaming devices, gaming consoles, and home theatre systems. Brands like boAt, Sony, JBL, Samsung, LG, Bose, and Noise feature regularly with significant markdowns."
                },
                {
                  icon: <Shirt className="w-4 h-4 text-[#FF3F6C]" />,
                  title: "Fashion & Clothing",
                  body: "Men's and women's clothing, ethnic wear, activewear, footwear, bags, belts, sunglasses, and watches from Myntra, AJIO, Tata CLiQ, Meesho, H&M, Zara, Nike, Adidas, and Puma. Fashion is the largest category by deal volume on Couponscrew."
                },
                {
                  icon: <Sparkles className="w-4 h-4 text-[#FC2779]" />,
                  title: "Beauty & Personal Care",
                  body: "Skincare, haircare, makeup, fragrances, grooming, and wellness products from Nykaa, Purplle, Mamaearth, Plum, Lakme, L'Oreal, The Man Company, and Beardo. Beauty deals frequently include combo offers, gift-with-purchase promotions, and app-exclusive discounts."
                },
                {
                  icon: <Home className="w-4 h-4 text-[#8B5CF6]" />,
                  title: "Home & Kitchen",
                  body: "Cookware, kitchen appliances, bedding, furniture, storage, home decor, and cleaning products from Prestige, Philips, Bajaj, Milton, Pepperfry, IKEA, Urban Ladder, and Wakefit. Home category deals are especially strong during festive seasons and new collection launches."
                },
                {
                  icon: <ShoppingBag className="w-4 h-4 text-[#FC8019]" />,
                  title: "Food & Grocery",
                  body: "Grocery delivery, fresh produce, packaged foods, health foods, and beverages from BigBasket, Blinkit, Zepto, Dunzo, and Amazon Fresh. Coupon codes in this category refresh multiple times a day — making it one of the most actively updated categories on the platform."
                },
                {
                  icon: <Utensils className="w-4 h-4 text-[#EF4444]" />,
                  title: "Food Delivery",
                  body: "Restaurant meal deals, free delivery offers, and app-exclusive codes from Zomato and Swiggy. One of the most searched categories on Couponscrew — because there is almost always a working promo code available for your next order."
                },
                {
                  icon: <Plane className="w-4 h-4 text-[#0084FF]" />,
                  title: "Travel & Stays",
                  body: "Flight discounts, hotel cashbacks, bus booking offers, train ticket deals, and holiday package promotions from MakeMyTrip, Goibibo, EaseMyTrip, OYO, Airbnb India, RedBus, Cleartrip, and IRCTC. Travel deals are time-sensitive and high in value — always check this category before booking anything."
                },
                {
                  icon: <Activity className="w-4 h-4 text-[#34D399]" />,
                  title: "Health & Fitness",
                  body: "Gym memberships, fitness equipment, sportswear, supplements, and health monitoring devices from Cult.fit, Decathlon, HealthKart, MuscleBlaze, Nivia, and Cosco. This category sees peak deal activity around January and pre-summer months."
                },
                {
                  icon: <HeartPulse className="w-4 h-4 text-[#EF4444]" />,
                  title: "Pharmacy & Medicines",
                  body: "Prescription medicines, OTC products, health supplements, and baby care from PharmEasy, 1mg, Netmeds, and Apollo Pharmacy. Deals here are among the most practically useful on the platform — reducing the cost of everyday healthcare purchases."
                },
                {
                  icon: <BookOpen className="w-4 h-4 text-[#6366F1]" />,
                  title: "EdTech & Online Courses",
                  body: "Course discounts and subscription deals from Udemy, Unacademy, Byju's, Coursera, and Skillshare. Annual subscription deals in this category can represent significant savings — making it worth checking before renewing any learning platform subscription."
                },
                {
                  icon: <Tv className="w-4 h-4 text-[#EC4899]" />,
                  title: "OTT & Entertainment",
                  body: "Subscription deals on Netflix, Amazon Prime, Disney+ Hotstar, SonyLIV, and Spotify India. Introductory offers, annual plan discounts, and bundle deals tracked and listed as they go live."
                },
                {
                  icon: <Baby className="w-4 h-4 text-[#F59E0B]" />,
                  title: "Baby & Kids",
                  body: "Baby clothing, toys, strollers, feeding products, and nursery furniture from Firstcry, Amazon Baby, Hopscotch, and Mothercare India. Deals in this category run frequently — especially during festive seasons and back-to-school periods."
                },
                {
                  icon: <Footprints className="w-4 h-4 text-[#14B8A6]" />,
                  title: "Pets",
                  body: "Pet food, accessories, grooming products, and health supplements from Heads Up For Tails, Supertails, Amazon Pets, and PetKart. The pet care market is growing rapidly and Couponscrew tracks deals in this space as it expands."
                }
              ].map((cat, idx) => (
                <div key={idx} className="rounded-2xl border border-[#E8E8F0] p-5 hover:border-[#5B4FBE] transition-colors bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-gray-50 flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <h3 className="text-sm font-extrabold text-[#1A1A2E]">{cat.title}</h3>
                  </div>
                  <p className="text-xs text-[#4A4A6A] mt-2 leading-relaxed">{cat.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#4A4A6A] italic leading-normal">
              More categories are being added continuously. Check back regularly to see what is new.
            </p>
          </div>

          {/* ARTICLE BLOCK 4 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
              <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Usage Blueprint</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How to Use a Category Page on Couponscrew
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Getting to the right deal through a category page is fast. Here is how it works:
              </p>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Pick your category", desc: "Click on any category tile on this page. You will be taken to that category's dedicated deal page on Couponscrew." },
                  { step: "2", title: "Browse or filter", desc: "On the category page, use subcategory filters to narrow down further. Sort deals by newest, highest discount, or ending soon depending on what matters most to you right now." },
                  { step: "3", title: "Compare across stores", desc: "Use the store tag on each deal card to compare what different retailers are offering within the same category. Pick the deal from the store that suits you best." },
                  { step: "4", title: "Reveal your deal", desc: "Click \"Get Deal\" or \"Show Code\" on the deal card. The coupon code will appear and the relevant store will open in a new tab." },
                  { step: "5", title: "Apply and save", desc: "Shop on the retailer's site, add your items to cart, and apply the code at checkout. Confirm your discounted total before placing the order." },
                  { step: "6", title: "Stack if possible", desc: "Check whether your bank card has an active cashback offer with the retailer. Combining a category deal from Couponscrew with a bank offer gives you the maximum possible saving on any purchase." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <div className="w-8 h-8 rounded-xl bg-[#5B4FBE] text-white flex items-center justify-center text-sm font-black shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A1A2E]">{item.title}</p>
                      <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ARTICLE BLOCK 5 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Tactics</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Tips for Getting Maximum Value From Category Deals
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Start with the category, not the store.</strong> Most shoppers go directly to Amazon or Myntra out of habit. Going to the category page on Couponscrew first means you see deals from all relevant stores simultaneously — and often find a better deal on a store you would not have thought to check. That cross-store view is what the best coupon code websites offer.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Use subcategory filters to reduce noise.</strong> A broad category like Electronics contains thousands of deals. Filtering to Earbuds or Smartwatches immediately narrows the list to what is actually relevant to you — saving time and making comparison faster.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Check ending soon deals in your category first.</strong> Within any category, deals marked &quot;Ending Soon&quot; are expiring within hours. If something in that list matches what you need, prioritise it over longer-running deals — the savings window is closing.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Explore adjacent categories.</strong> If you are shopping for fitness gear, also check Health & Fitness alongside Sports — some brands cross-list deals across both. Couponscrew&apos;s category structure is built to help you discover deals you would not have found through a single-store search.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Bookmark the categories you shop most.</strong> If you order food regularly, bookmark the Food Delivery category page. If you shop fashion frequently, bookmark Fashion & Clothing. Returning directly to your most-used category page is the fastest way to grab a deal before checkout every time.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ARTICLE BLOCK 6 - FAQ SECTION */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-4 h-4 text-[#5B4FBE]" />
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                { q: "How many categories does Couponscrew currently have?", a: "All the major ones, and more being added. Fashion, electronics, food delivery, travel, beauty, home, health, entertainment, education — plus niche categories being added as the platform grows. Every new one appears on this page first." },
                { q: "Will more categories be added over time?", a: "Yes. Couponscrew's roadmap includes niche categories and subcategory expansions. If there is a category you want covered, hit the Contact page and suggest it." },
                { q: "Can I find deals from multiple stores within one category?", a: "That is the whole point. Every category page aggregates deals from all relevant stores — so you compare Amazon vs Flipkart vs Myntra without opening three tabs." },
                { q: "Are category pages updated in real time?", a: "Yes. Deals go live as they are added, and expire as they end. What you see is what is actually available right now." },
                { q: "What if I cannot find a category I am looking for?", a: "Search by name or keyword using the bar at the top. If it does not exist yet, use the Contact page to request it. We add new categories based on what users ask for." },
                { q: "Do category pages work on mobile?", a: "Yes — fully. Every filter, deal card, and coupon reveal works on smartphone. Most deal-finding happens on mobile and the pages are built for it." }
              ].map((faq, index) => (
                <div key={index} className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
                  <h3 className="text-sm font-extrabold text-[#1A1A2E] mb-1.5">{faq.q}</h3>
                  <p className="text-xs text-[#4A4A6A] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ARTICLE BLOCK 7 - FOOTER/CALL TO ACTION */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
              <span className="text-xs font-black text-white/60 uppercase tracking-widest">Alignment</span>
            </div>
            <h2 className="text-2xl font-black text-white leading-tight">
              Every Category. Every Deal. One Platform.
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                The way people shop online has changed. Nobody stays loyal to one store — they shop across Amazon, Flipkart, Myntra, Zomato, MakeMyTrip, and dozens of other platforms depending on what they need that day.
              </p>
              <p>
                Couponscrew&apos;s Categories page is built for exactly that behaviour. Most discount code sites are built around stores, not shopping intent. It does not ask you to remember which store has the best deal today. It just asks what you want to buy — and then shows you the best deal for it, from wherever it happens to be available.
              </p>
              <p>
                Every category. Every deal. Verified and updated daily.
              </p>
              <p className="text-white font-semibold text-base pt-2">
                Pick a category. Find your deal. We already verified it.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT - SIDEBAR CARDS (30%) */}
        <div className="lg:col-span-3 space-y-5">

          {/* SIDEBAR CARD 1 - Matrix Metrics */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm sticky top-24">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#5B4FBE]" />
              How This Page Works
            </h3>
            <p className="text-xs text-[#4A4A6A] mb-4">What&apos;s powering the categories you see here.</p>
            <div className="space-y-2">
              {[
                { layer: "Active Hubs", val: "Multi-Store Views" },
                { layer: "Refining Tools", val: "Subcategory Sets" },
                { layer: "Traceability", val: "Retailer Tags" },
                { layer: "Audit Frequency", val: "Real-Time Sync" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
                  <span className="text-xs text-[#4A4A6A] font-medium">{row.layer}</span>
                  <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.val}</span>
                </div>
              ))}
              <div className="flex items-center justify-center pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
                <span className="text-xs font-black text-white tracking-wide uppercase">Every Category. Every Store.</span>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 2 - Interface Controls */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-[#22C55E]" />
              Browse Smarter
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  Context Layouts
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Every category has subcategories. Use them to filter down from Electronics to Earbuds, or Fashion to Women&apos;s Footwear — faster than browsing a full feed.
                </p>
              </div>
              <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                  <Layers className="w-3.5 h-3.5 text-[#FF9900]" />
                  Sync Filters
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Sort by newest, highest discount, or ending soon. Filter by store. The right deal surfaces in seconds.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 3 - Highlight Label */}
          <div className="bg-gradient-to-br from-[#FF5722] to-[#FF8A50] rounded-2xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-white" />
              <span className="text-xs font-black uppercase tracking-wider">Device Support</span>
            </div>
            <h3 className="text-sm font-extrabold text-white leading-snug">Mobile Optimized</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed">
              Filters, deal cards, and coupon reveals all work on phone. Most shoppers find deals on mobile — the page is built for it.
            </p>
          </div>

        </div>

      </div>
    </section>

      <Footer />
    </div>
  );
}
