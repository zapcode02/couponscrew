'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Ticket, Facebook, Instagram, Twitter, Youtube, ArrowRight, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#1A1A2E] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          {/* COL 1: Brand & Logo */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#5B4FBE] p-2 rounded-lg text-white">
                <Ticket className="w-5 h-5 rotate-[-15deg]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Couponscrew
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              India's most trusted coupon website. Find verified coupons, deals & offers from 500+ brands and save more every day!
            </p>
            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-[#5B4FBE] hover:border-[#5B4FBE] hover:bg-white transition-all duration-200" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-[#FF5722] hover:border-[#FF5722] hover:bg-white transition-all duration-200" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-sky-400 hover:border-sky-400 hover:bg-white transition-all duration-200" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-red-500 hover:border-red-500 hover:bg-white transition-all duration-200" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COL 2: Useful Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-[#5B4FBE]">
              Useful Links
            </h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Terms & Conditions</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">FAQ</Link></li>
            </ul>
          </div>

          {/* COL 3: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-[#FF5722]">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/stores" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8 cursor-pointer">Stores</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8 cursor-pointer">Products</Link></li>
              <li><Link href="/deals-of-the-day" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8 cursor-pointer">Deals of the Day</Link></li>
              <li><Link href="/deals-of-the-month" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Deal of the Month</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Blog</Link></li>
            </ul>
          </div>

          {/* COL 4: Top Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-emerald-500">
              Top Categories
            </h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Fashion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Electronics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Food & Grocery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Travel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Web Hosting</a></li>
            </ul>
          </div>

          {/* COL 5: Newsletter */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-purple-400">
              Get Daily Deals
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pt-2">
              Get the best offers & coupons straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch gap-1 pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-gray-800/80 border border-gray-700 hover:border-gray-600 focus:border-[#5B4FBE] rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none lg:rounded-t-lg lg:rounded-br-none xl:rounded-l-lg xl:rounded-tr-none px-4 py-2.5 text-white text-sm focus:outline-none flex-1 min-w-0 transition-colors"
              />
              <button
                type="submit"
                className="bg-[#5B4FBE] hover:bg-indigo-600 text-white px-5 py-2.5 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none lg:rounded-b-lg lg:rounded-tl-none xl:rounded-r-lg xl:rounded-b-none text-sm font-semibold transition-colors duration-200 cursor-pointer flex items-center justify-center gap-1 shrink-0"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-emerald-400 text-xs font-semibold animate-pulse">
                ✓ Subscribed successfully! Thank you.
              </p>
            )}

            {/* Contact info below subscribe box */}
            <div className="border-t border-gray-800 pt-4 mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>support@couponscrew.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8 mt-4 text-center gap-4 text-xs sm:text-sm text-gray-500">
          <div>
            © 2026 Couponscrew. All Rights Reserved.
          </div>
          
        </div>
      </div>
    </footer>
  );
}
