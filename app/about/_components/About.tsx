'use client';

import React from 'react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import { 
  Target, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Globe, 
  Heart, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Building2, 
  Clock, 
  ThumbsUp, 
  BadgeCheck 
} from 'lucide-react';

// Interfaces for structured data
interface StatItem {
  number: string;
  label: string;
  sub: string;
  icon: React.ComponentType<any>;
}

interface TimelineItem {
  year: string;
  side: 'left' | 'right';
  title: string;
  desc: string;
  icon: string;
  color: string;
}

interface TeamMember {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  quote: string;
}

interface FeatureItem {
  icon: React.ComponentType<any>;
  color: string;
  bg: string;
  title: string;
  desc: string;
}

export default function About() {
  // Hardcoded Data according to rules
  const statsList: StatItem[] = [
    { number: "10,000+", label: "Coupons Verified", sub: "Tested by us before it reaches you", icon: BadgeCheck },
    { number: "500+", label: "Brand Partners", sub: "From Amazon to Zomato, covered", icon: Building2 },
    { number: "50,000+", label: "Happy Users", sub: "Shoppers who stopped guessing", icon: Users },
    { number: "92.4%", label: "Success Rate", sub: "Codes that actually work at checkout", icon: ThumbsUp }
  ];

  const timelineList: TimelineItem[] = [
    { 
      year: "2020", 
      side: "left",
      title: "The Idea Was Born",
      desc: "Someone on the team tried to use a coupon code during GIF. It was expired. Tried five more. All dead. Couponscrew was the answer to that frustration.",
      icon: "💡", 
      color: "#5B4FBE" 
    },
    { 
      year: "2021", 
      side: "right",
      title: "Couponscrew Goes Live",
      desc: "Launched with 50 brand partners and 500 verified codes. 10,000 users in three months - word spread faster than we expected.",
      icon: "🚀", 
      color: "#FF5722" 
    },
    { 
      year: "2022", 
      side: "left",
      title: "500+ Brands & Growing",
      desc: "Expanded to 500+ brands across fashion, electronics, food, travel, and more. One place for every kind of deal. Not many coupon websites cover this ground.",
      icon: "🤝", 
      color: "#22C55E" 
    },
    { 
      year: "2024", 
      side: "right",
      title: "92.4% - That's Our Bar",
      desc: "92.4% of our codes work at checkout. That number is the whole job. Everything else follows from getting that right.",
      icon: "🏆", 
      color: "#FFD700" 
    }
  ];

  const teamList: TeamMember[] = [
    { 
      name: "Rahul Sharma", 
      role: "Founder & CEO", 
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      linkedin: "#",
      quote: "Every rupee saved is a rupee earned." 
    },
    { 
      name: "Priya Mehta", 
      role: "Head of Partnerships",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      linkedin: "#",
      quote: "Building bridges between brands and savers." 
    },
    { 
      name: "Arjun Patel", 
      role: "Lead Developer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      linkedin: "#",
      quote: "Code that saves people money is the best code." 
    },
    { 
      name: "Sneha Reddy", 
      role: "Head of Content",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      linkedin: "#",
      quote: "Great deals deserve great storytelling." 
    }
  ];

  const featuresList: FeatureItem[] = [
    { 
      icon: ShieldCheck, 
      color: "#5B4FBE", 
      bg: "#F0EEFF",
      title: "100% Manually Verified",
      desc: "Every coupon is tested by a real person before it goes live. We don't publish and hope - we verify first — a standard the best coupon code websites are judged by." 
    },
    { 
      icon: Zap, 
      color: "#FF5722", 
      bg: "#FFF3F0",
      title: "Real-Time Updates",
      desc: "Expired codes get pulled within minutes. Our listings stay clean so you don't waste time on dead codes. That speed is rare even among the best online coupon sites."
    },
    { 
      icon: Heart, 
      color: "#EC4899", 
      bg: "#FDF0F7",
      title: "User-First Approach",
      desc: "Two verified codes beat 47 expired ones every time. We optimise for your time, not our listing count." 
    },
    { 
      icon: Globe, 
      color: "#0EA5E9", 
      bg: "#F0F9FF",
      title: "500+ Brand Partners",
      desc: "From Amazon to Zomato, we work directly with 500+ brands to surface deals you'd otherwise miss. That partner depth is part of what makes Couponscrew the best coupon website for range."
    },
    { 
      icon: Award, 
      color: "#F59E0B", 
      bg: "#FFFBEB",
      title: "Award-Winning Platform",
      desc: "We don't claim awards - we claim a 92.4% coupon success rate. That's the number that matters for the best websites for couponing." 
    },
    { 
      icon: Clock, 
      color: "#22C55E", 
      bg: "#F0FDF4",
      title: "Updated Every Day",
      desc: "New coupons added every day. Our team checks what's live, what's expired, and what's worth your time." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans">
      {/* Navbar Shared Component */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-grow">
        
        {/* SECTION 1  -  HERO BANNER */}
        <section className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] min-h-[520px] flex items-center relative overflow-hidden py-16 md:py-24">
          
          {/* Decorative CSS-only Shapes */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white opacity-5 pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[#FF5722] opacity-10 pointer-events-none"></div>
          
          {/* Small dots grid */}
          <div className="absolute top-10 left-10 grid grid-cols-5 gap-3 pointer-events-none">
            {Array.from({ length: 25 }).map((_, idx) => (
              <div key={idx} className="w-1 h-1 rounded-full bg-white opacity-20"></div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column (55% on lg) */}
            <div className="md:col-span-12 lg:col-span-7 space-y-6">
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>INDIA&apos;S MOST OBSESSED COUPON TEAM</span>
              </span>

              <div className="space-y-2">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                  About <span className="text-[#FF5722]">Couponscrew</span>
                </h1>
                <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white">
                  We Help India
                </h2>
                <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF5722]">
                  Shop Smarter
                </h2>
              </div>

              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                We built Couponscrew because finding a working coupon code was genuinely painful. Six codes, six failures, checkout abandoned. Most coupon sites never clean their listings — even the best coupon sites for online shopping leave you with expired codes. We verify before we publish. 10,000+ coupons. 500+ brands. 92.4% of our codes work at checkout.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#mission-section"
                  className="bg-[#FF5722] text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:bg-orange-500 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-orange-500/30 cursor-pointer"
                >
                  <span>Explore Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#team-section"
                  className="border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Join Our Community</span>
                </a>
              </div>
            </div>

            {/* Right Column (45% on lg) */}
            <div className="hidden lg:col-span-5 lg:flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-3xl p-8 w-full max-w-md shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Card 1 */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center transition-all hover:bg-white/20">
                    <ShieldCheck className="w-8 h-8 text-[#22C55E] mx-auto filter drop-shadow-[0_2px_8px_rgba(34,197,94,0.4)]" />
                    <h3 className="text-3xl font-black text-white mt-2 font-display">10,000+</h3>
                    <p className="text-xs text-white/60 mt-1 font-medium select-none">Verified Coupons</p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center transition-all hover:bg-white/20">
                    <Users className="w-8 h-8 text-[#FFD700] mx-auto filter drop-shadow-[0_2px_8px_rgba(255,215,0,0.4)]" />
                    <h3 className="text-3xl font-black text-white mt-2 font-display">50,000+</h3>
                    <p className="text-xs text-white/60 mt-1 font-medium select-none">Happy Users</p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center transition-all hover:bg-white/20">
                    <Building2 className="w-8 h-8 text-[#FF5722] mx-auto filter drop-shadow-[0_2px_8px_rgba(255,87,34,0.4)]" />
                    <h3 className="text-3xl font-black text-white mt-2 font-display">500+</h3>
                    <p className="text-xs text-white/60 mt-1 font-medium select-none">Brand Partners</p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center transition-all hover:bg-white/20">
                    <TrendingUp className="w-8 h-8 text-[#A78BFA] mx-auto filter drop-shadow-[0_2px_8px_rgba(167,139,250,0.4)]" />
                    <h3 className="text-3xl font-black text-white mt-2 font-display">92.4%</h3>
                    <p className="text-xs text-white/60 mt-1 font-medium select-none">Success Rate</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 2  -  OUR MISSION */}
        <section id="mission-section" className="bg-white py-20 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image block */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                  alt="Our Mission Team" 
                  className="w-full h-[480px] object-cover rounded-3xl shadow-2xl relative z-10 hover:scale-[1.01] transition-transform duration-300"
                />
                
                {/* Floating bottom badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#5B4FBE] text-white rounded-2xl p-5 shadow-2xl z-20 flex flex-col items-center text-center max-w-[200px] border border-indigo-400/20 transform hover:-translate-y-1 transition-transform">
                  <span className="text-3xl select-none" role="img" aria-label="Target">🎯</span>
                  <span className="text-sm font-bold mt-2">Our Mission</span>
                  <span className="text-xs opacity-80 mt-1">Make Saving Effortless</span>
                </div>

                {/* Floating top badge */}
                <div className="absolute -top-6 -left-6 bg-white border border-[#E8E8F0] rounded-2xl p-4 shadow-2xl z-20 flex items-center gap-3 transform hover:translate-y-1 transition-transform">
                  <div className="bg-amber-50 p-1.5 rounded-lg">
                    <Star className="fill-[#FFD700] text-[#FFD700] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A2E]">4.9/5 Rating</p>
                    <p className="text-[10px] text-gray-400 font-medium font-mono uppercase tracking-wider">From 50K+ Users</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#5B4FBE] uppercase bg-[#F0EEFF] px-3.5 py-1.5 rounded-md inline-block">
                OUR MISSION
              </span>
              
              <div className="space-y-1.5">
                <h2 className="text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  We're On a Mission to Make
                </h2>
                <h3 className="text-4xl font-extrabold text-[#FF5722]">
                  Every Code Work
                </h3>
              </div>

              <p className="text-[#4A4A6A] text-lg leading-relaxed">
                Most coupon sites list expired codes and don't care. You land, try five dead codes, leave frustrated. We verify before we publish. That's the only meaningful difference between a good coupon site and a directory of disappointments. Choosing the best coupon website over the rest comes down to exactly this. That gap is also what separates the best websites for couponing from the ones you'll never visit twice.
              </p>

              <p className="text-[#4A4A6A] text-base leading-relaxed">
                Our team tests every code before it goes live. Not after a user reports it broken. Before. That process is slower and it's entirely the point.
              </p>

              {/* Checkpoints */}
              <div className="mt-8 space-y-3.5">
                {[
                  "Every code tested before it goes live - not after",
                  "Expired codes pulled within minutes. Not days.",
                  "500+ brands. Fashion, food, travel, electronics - all covered"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <span className="bg-emerald-50 text-[#22C55E] p-1.5 rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5" />
                    </span>
                    <span className="text-sm font-semibold text-[#1A1A2E]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Discover Link */}
              <div className="pt-4">
                <a 
                  href="#how-we-work-section"
                  className="text-[#5B4FBE] font-bold text-base flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group"
                >
                  <span>Discover How We Work</span>
                  <ArrowRight className="w-5 h-5 text-[#5B4FBE] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 3  -  STATS STRIP */}
        <section className="bg-gradient-to-r from-[#5B4FBE] to-[#7C3AED] py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent)]"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
              
              {statsList.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="text-center px-6 relative group">
                    {/* Circle Icon Container */}
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-115">
                      <Icon className="text-white w-7 h-7" />
                    </div>

                    <h3 className="text-4xl font-black text-white mt-4 font-display">
                      {stat.number}
                    </h3>
                    
                    <p className="text-base font-semibold text-white/90 mt-1">
                      {stat.label}
                    </p>
                    
                    <p className="text-xs text-white/60 mt-1 font-medium">
                      {stat.sub}
                    </p>

                    {/* Divider for screens lg and wider */}
                    {idx < 3 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-white/20 select-none"></div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>
        </section>


        {/* SECTION 4  -  OUR STORY / TIMELINE */}
        <section className="bg-[#F8F8FF] py-20 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header centered */}
            <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#5B4FBE] uppercase bg-indigo-50 px-3.5 py-1.5 rounded-md inline-block">
                OUR JOURNEY
              </span>
              <h2 className="text-3xl font-extrabold text-[#1A1A2E]">
                How Couponscrew Came to Life
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                A brief overview of how we grew from a small savings tool to India's most loved deals community.
              </p>
            </div>

            {/* Timeline container */}
            <div className="relative mt-12">
              
              {/* Center vertical route line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E8E8F0] -translate-x-1/2 hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-4">
                {timelineList.map((item, idx) => {
                  const isLeft = item.side === 'left';
                  return (
                    <div 
                      key={idx} 
                      className="flex flex-col md:flex-row items-center w-full relative"
                    >
                      {/* Responsive card sorting side configuration */}
                      <div className={`w-full md:w-1/2 flex justify-center ${isLeft ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12 order-2 md:order-1'}`}>
                        <div className="bg-white rounded-3xl p-6.5 border border-[#E8E8F0] shadow-xs hover:shadow-xl hover:border-indigo-100 transition-all duration-300 w-full max-w-md relative group">
                          {/* Top decorative gradient line on card border */}
                          <div 
                            className="absolute top-0 left-8 right-8 h-[3px] rounded-full"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          
                          <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1 rounded-full inline-block font-mono">
                            YEAR {item.year}
                          </span>
                          
                          <div className="text-3xl mt-4 select-none animate-bounce-slow">
                            {item.icon}
                          </div>
                          
                          <h3 className="text-lg font-extrabold text-[#1A1A2E] mt-3 group-hover:text-[#5B4FBE] transition-colors">
                            {item.title}
                          </h3>
                          
                          <p className="text-sm text-[#4A4A6A] leading-relaxed mt-2.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Center Dot Indicator */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 flex items-center justify-center shadow-md z-10 hidden md:flex" style={{ borderColor: item.color }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                      </div>

                      <div className="w-full md:w-1/2 hidden md:block select-none pointer-events-none"></div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>


       


        {/* SECTION 6  -  WHY CHOOSE US */}
        <section id="how-we-work-section" className="bg-[#F8F8FF] py-20 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Centered header content */}
            <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#5B4FBE] uppercase bg-indigo-50 px-3.5 py-1.5 rounded-md inline-block">
                WHY Couponscrew
              </span>
              <h2 className="text-3xl font-extrabold text-[#1A1A2E]">
                What Makes Us Different
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                We don't just list coupons  -  we verify, update and guarantee every deal on our platform.
              </p>
            </div>

            {/* Features list grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl p-7 border border-[#E8E8F0] hover:border-[#5B4FBE] hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Icon frame container */}
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: item.bg }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>

                    <h3 className="text-lg font-bold text-[#1A1A2E] mt-5 leading-snug group-hover:text-[#5B4FBE] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#4A4A6A] leading-relaxed mt-2.5">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* SECTION 7  -  CTA BANNER */}
        <section className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] py-20 relative overflow-hidden">
          
          {/* Decorative design layouts */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#FF5722] opacity-10 pointer-events-none"></div>
          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white opacity-5 pointer-events-none"></div>
          
          {/* 3x5 Dots grid */}
          <div className="absolute top-8 left-12 grid grid-cols-5 gap-2.5 pointer-events-none">
            {Array.from({ length: 15 }).map((_, idx) => (
              <div key={idx} className="w-1 h-1 rounded-full bg-white opacity-20"></div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
            <span className="text-5xl select-none animate-bounce-slow inline-block" role="img" aria-label="Target">🎯</span>
            
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Ready to Start Saving?
              </h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FF5722] font-display">
                Smarter.
              </p>
            </div>

            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              50,000 shoppers have already stopped wasting time on expired codes. The next deal is waiting.
            </p>

            {/* Horizontal Trust Pills Row */}
            <div className="flex justify-center gap-3.5 flex-wrap pt-2 select-none">
              {[
                "Free to Use",
                "No Registration Required",
                "100% Verified Deals"
              ].map((pill, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 backdrop-blur-xs border border-white/20 text-white text-xs sm:text-sm px-4.5 py-2.5 rounded-full flex items-center gap-1.5 font-semibold"
                >
                  <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>

            {/* In-banner action control triggers */}
            <div className="flex justify-center gap-4 flex-wrap pt-6">
              <a 
                href="/" 
                className="bg-[#FF5722] hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/35 flex items-center gap-2 cursor-pointer"
              >
                <span>Browse Top Coupons</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </a>
              <a 
                href="/" 
                className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>View All Brands</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Shared Component */}
      <Footer />
    </div>
  );
}

