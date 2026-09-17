'use client';

import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Store,
  Package,
  Tag,
  FileText,
  Info,
  Grid3x3,
  type LucideIcon,
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

interface SiteLink {
  label: string;
  href: string;
}

interface SiteSection {
  title: string;
  icon: LucideIcon;
  links: SiteLink[];
}

const MAIN_PAGES: SiteLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Stores', href: '/stores' },
  { label: 'Products', href: '/products' },
  { label: 'Festival Offers', href: '/festival-offers' },
  { label: 'Deals', href: '/deals' },
  { label: 'Deals of the Day', href: '/deals-of-the-day' },
  { label: 'Offers', href: '/offers' },
  { label: 'Blog', href: '/blog' },
];

const STORES: SiteLink[] = [
  { label: 'Amazon', href: '/stores/amazon-coupon-code' },
  { label: 'Pepperfry', href: '/stores/pepperfry-coupon-code' },
  { label: 'Myntra', href: '/stores/myntra-coupon-code' },
  { label: 'Flipkart', href: '/stores/flipkart-coupon-code' },
  { label: 'Dominos', href: '/stores/dominos-coupon-code' },
  { label: 'redBus', href: '/stores/red-bus-coupon-code' },
  { label: 'JioMart', href: '/stores/jiomart-coupon-code' },
  { label: 'Puma', href: '/stores/puma-coupon-code' },
  { label: 'Lenskart', href: '/stores/lenskart-coupon-code' },
  { label: 'Hostinger', href: '/stores/hostinger-coupon-code' },
  { label: 'Nykaa', href: '/stores/nykaa-coupon-code' },
  { label: 'Ajio', href: '/stores/ajio-coupon-code' },
  { label: 'MuscleBlaze', href: '/stores/muscleblaze-coupon-code' },
  { label: 'IndiGo', href: '/stores/indigo-coupon-code' },
  { label: 'Rapido', href: '/stores/rapido-coupon-code' },
  { label: 'BookMyShow', href: '/stores/bookmyshow-coupon-code' },
  { label: 'Ola', href: '/stores/ola-coupon-code' },
  { label: 'PW', href: '/stores/pw-coupon-code' },
  { label: 'Zepto', href: '/stores/zepto-coupon-code' },
  { label: 'Blinkit', href: '/stores/blinkit-coupon-code' },
  { label: 'Magicpin', href: '/stores/magicpin-coupon-code' },
  { label: 'KreditBee', href: '/stores/kreditbee-coupon-code' },
  { label: "Levi's", href: '/stores/levis-coupon-code' },
  { label: 'ZEE5', href: '/stores/zee5-coupon-code' },
  { label: 'Uber', href: '/stores/uber-coupon-code' },
  { label: 'UNiDAYS', href: '/stores/unidays-coupon-code' },
  { label: 'H&M', href: '/stores/hm-coupon-code' },
  { label: 'FirstCry', href: '/stores/firstcry-coupon-code' },
  { label: 'Sony Live', href: '/stores/sonyliv-coupon-code' },
  { label: 'Booking.com', href: '/stores/booking-coupon-code' },
  { label: 'Adidas', href: '/stores/adidas-coupon-code' },
  { label: 'FlixBus', href: '/stores/flixbus-coupon-code' },
  { label: 'Lifestyle', href: '/stores/lifestyle-coupon-code' },
  { label: 'Nike', href: '/stores/nike-coupon-code' },
  { label: 'Expedia', href: '/stores/expedia-coupon-code' },
];

const STORE_CATEGORIES: SiteLink[] = [
  { label: 'All Store Categories', href: '/stores/categories' },
  { label: 'Fashion', href: '/stores/categories/fashion' },
  { label: 'Beauty', href: '/stores/categories/beauty' },
  { label: 'Exercise & Fitness', href: '/stores/categories/exercise-and-fitness' },
  { label: 'Home & Kitchen', href: '/stores/categories/home-and-kitchen' },
  { label: 'Clothing & Accessories', href: '/stores/categories/clothing-and-accessories' },
  { label: 'Electronics', href: '/stores/categories/electronics' },
  { label: 'Food & Grocery', href: '/stores/categories/food-and-grocery' },
  { label: 'Travel', href: '/stores/categories/travel' },
  { label: 'Education', href: '/stores/categories/education' },
  { label: 'Entertainment', href: '/stores/categories/entertainment' },
  { label: 'Finance', href: '/stores/categories/finance' },
  { label: 'Web Hosting', href: '/stores/categories/web-hosting' },
  { label: 'Health', href: '/stores/categories/health' },
  { label: 'Sports', href: '/stores/categories/sports' },
  { label: 'Software', href: '/stores/categories/software' },
  { label: 'Gaming', href: '/stores/categories/gaming' },
  { label: 'Jewellery', href: '/stores/categories/jewellery' },
  { label: 'Eyewear', href: '/stores/categories/eyewear' },
  { label: 'Furniture', href: '/stores/categories/furniture' },
];

const PRODUCT_CATEGORIES: SiteLink[] = [
  { label: 'All Product Categories', href: '/products/categories' },
  { label: 'Electronics', href: '/products/categories/electronics' },
  { label: 'Home & Kitchen', href: '/products/categories/home-and-kitchen' },
  { label: 'Health', href: '/products/categories/health' },
  { label: 'Beauty', href: '/products/categories/beauty' },
  { label: 'Sports', href: '/products/categories/sports' },
  { label: 'Toys', href: '/products/categories/toys' },
  { label: 'Software', href: '/products/categories/software' },
  { label: 'Video Games', href: '/products/categories/video-games' },
  { label: 'Pet Supplies', href: '/products/categories/pet-supplies' },
];

const PRODUCTS: SiteLink[] = [
  { label: "Acnos Bangle Watch, Pack of 2", href: '/products/acnos-bangle-watch-pack-of-2' },
  { label: "DEELMO Men's Mandarin Collar Kurta", href: '/products/deelmo-mens-mandarin-collar-kurta' },
  { label: 'Desidiya Moon Crystal Night Light', href: '/products/desidiya-moon-crystal-night-light' },
  { label: 'Minimalist Anti-Pigmentation Kit', href: '/products/minimalist-anti-pigmentation-kit' },
  { label: 'PulGos 15-in-1 Pushup Board', href: '/products/pulgos-15-in-1-pushup-board' },
];

const BLOG_POSTS: SiteLink[] = [
  { label: 'How to Save Money Shopping Online in India', href: '/blog/how-to-save-money-shopping-online-india' },
  { label: 'Best Raksha Bandhan Gift Ideas', href: '/blog/raksha-bandhan-gift-ideas' },
  { label: 'Bigg Boss Season 20: Where to Watch & Best Deals', href: '/blog/bigg-boss-season-20-where-to-watch-deals' },
];

const COMPANY_LEGAL: SiteLink[] = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Branding', href: '/branding' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faqs' },
  { label: 'Feedback', href: '/feedback' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
];

const SECTIONS: SiteSection[] = [
  { title: 'Main Pages', icon: Home, links: MAIN_PAGES },
  { title: 'Stores', icon: Store, links: STORES },
  { title: 'Store Categories', icon: Grid3x3, links: STORE_CATEGORIES },
  { title: 'Product Categories', icon: Grid3x3, links: PRODUCT_CATEGORIES },
  { title: 'Products', icon: Package, links: PRODUCTS },
  { title: 'Blog Posts', icon: FileText, links: BLOG_POSTS },
  { title: 'Company & Legal', icon: Info, links: COMPANY_LEGAL },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main className="flex-1">
        <section className="bg-white border-b border-[#E8E8F0] py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-xs md:text-sm text-[#4A4A6A] select-none mb-4">
              <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-[#5B4FBE] font-semibold">Sitemap</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-[#1A1A2E] tracking-tight">Sitemap</h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-[#4A4A6A] leading-relaxed">
              A complete list of every page on CouponsCrew — stores, categories, products, and company pages — all in one place.
            </p>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="bg-white rounded-2xl border border-[#E8E8F0] shadow-sm p-6"
                >
                  <h2 className="flex items-center gap-2 font-bold text-[#1A1A2E] text-base mb-4 pb-3 border-b border-[#E8E8F0]">
                    <Icon size={18} className="text-[#5B4FBE]" />
                    <span>{section.title}</span>
                    <span className="ml-auto text-[10px] font-black uppercase text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">
                      {section.links.length}
                    </span>
                  </h2>

                  <ul className={`grid gap-x-4 gap-y-1 text-sm ${section.links.length > 10 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[#4A4A6A] hover:text-[#5B4FBE] hover:pl-1 transition-all leading-8 flex items-center gap-1.5"
                        >
                          <Tag size={11} className="text-gray-300 shrink-0" />
                          <span className="truncate">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
