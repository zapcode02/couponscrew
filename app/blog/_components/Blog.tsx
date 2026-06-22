'use client';

import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  BookOpen,
  PenTool,
  Users,
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

// ==========================================
// SINGLE POST DATA
// ==========================================
const post = {
  slug: 'how-to-save-money-shopping-online-india',
  title: 'How to Save Money Shopping Online in India — Introducing CouponsCrew',
  category: 'Shopping Guides',
  image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1782146686/how-to-save-money-shopping-online-india_sf1h2y.webp',
  date: 'Jun 22, 2026',
  readTime: '9 min read',
  excerpt: 'Online shopping in India has never been bigger — and never been more confusing when it comes to actually getting a good price. Here is how to stack every discount layer, and why CouponsCrew exists.',
  tags: ['Online Shopping', 'Coupon Tips', 'Money Saving'],
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main>
      {/* ==========================================
          SECTION 1 - HERO BANNER
          ========================================== */}
      <section className="relative w-full min-h-[380px] bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] overflow-hidden flex items-center justify-center text-center py-16 px-6">

        {/* Decorative dot grids */}
        <div className="absolute top-10 left-10 grid grid-cols-5 gap-3 pointer-events-none opacity-20 z-0">
          {Array.from({ length: 25 }).map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
        <div className="absolute right-12 bottom-12 grid grid-cols-6 gap-2.5 pointer-events-none opacity-10 z-0">
          {Array.from({ length: 18 }).map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>

        <div className="absolute top-[-80px] left-[-80px] w-80 h-80 bg-purple-500 rounded-full opacity-10 filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-80px] w-80 h-80 bg-[#FF5722] rounded-full opacity-10 filter blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 space-y-5">
          {/* Breadcrumb row */}
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs tracking-wider uppercase select-none">
            <Link href="/" className="hover:text-white transition-colors duration-200">HOME</Link>
            <ChevronRight size={12} className="text-white/40 shrink-0" />
            <span className="text-white font-semibold">BLOG</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mt-6">
            <span className="text-white">Our </span>
            <span className="text-[#FF5722]">Blog</span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Real deal strategies, platform comparisons, and money-saving guides from people who spend their days verifying coupons. No filler, no generic listicles.
          </p>

          {/* 3 stat pills row */}
          <div className="pt-4 flex justify-center gap-4 flex-wrap select-none text-xs sm:text-sm">
            <div className="bg-white/10 border border-white/20 text-white font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/15 transition-all duration-200">
              <BookOpen size={14} className="text-[#FF5722]" />
              <span>Verified Coupon Guides</span>
            </div>
            <div className="bg-white/10 border border-white/20 text-white font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/15 transition-all duration-200">
              <PenTool size={14} className="text-[#FFD700]" />
              <span>Updated Regularly</span>
            </div>
            <div className="bg-white/10 border border-white/20 text-white font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/15 transition-all duration-200">
              <Users size={14} className="text-teal-400" />
              <span>50,000+ Registered Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2 - LATEST INSIGHTS
          ========================================== */}
      <section id="blog-grid-section" className="bg-[#F8F8FF] py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADING */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#1A1A2E]">
              Latest <span className="text-[#5B4FBE]">Insights</span>
            </h2>
            <div className="w-16 h-1 bg-[#FF5722] rounded-full mx-auto mt-3" />
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group flex flex-col sm:flex-row shadow-xs">
              {/* LEFT - Image block */}
              <div className="relative overflow-hidden md:w-56 shrink-0 h-48 md:h-auto min-h-[192px]">
                <NextImage
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={192}
                  sizes="(max-width: 768px) 100vw, 224px"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-[#5B4FBE] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* RIGHT - Content */}
              <div className="flex-1 p-5 flex flex-col justify-between text-left">
                <div>
                  {/* Meta row */}
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <div className="flex items-center gap-1 shrink-0">
                      <Calendar size={12} className="text-gray-400" />
                      <span>{post.date}</span>
                    </div>
                    <span className="w-1.5 h-1.5 bg-gray-200 rounded-full shrink-0" />
                    <div className="flex items-center gap-1 shrink-0">
                      <Clock size={12} className="text-gray-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block text-base sm:text-lg font-bold text-[#1A1A2E] leading-snug mt-2 hover:text-[#5B4FBE] transition-colors"
                  >
                    {post.title}
                  </Link>

                  {/* Excerpt */}
                  <p className="text-sm text-[#4A4A6A] leading-relaxed line-clamp-2 mt-2 font-light">
                    {post.excerpt}
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-end">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-extrabold text-[#FF5722] hover:text-orange-600 active:scale-95 flex items-center gap-1 cursor-pointer transition-all duration-200 uppercase tracking-widest pl-2 py-1 select-none"
                  >
                    <span>READ MORE</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
