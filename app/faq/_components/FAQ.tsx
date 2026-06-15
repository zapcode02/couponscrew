'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import {
  HelpCircle,
  Search,
  ArrowRight,
  MessageCircle,
  Grid,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  List,
  Tag,
  User,
  Percent,
  CreditCard,
  Shield,
  Store,
  Settings,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  ShieldCheck,
  Users,
  Heart,
  Star
} from 'lucide-react';

// TypeScript Interfaces
interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface CategoryInfo {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Non-functional helpful status tracker for visual high-fidelity experience
  const [feedback, setFeedback] = useState<Record<string, 'helpful' | 'unhelpful'>>({});

  // 7 core categories matching instructions
  const categories: CategoryInfo[] = [
    { id: 'coupon', name: 'Coupon Usage', icon: Tag, color: '#FF5722', bgColor: '#FFF3F0' },
    { id: 'account', name: 'Account & Login', icon: User, color: '#5B4FBE', bgColor: '#F0EEFF' },
    { id: 'deals', name: 'Deals & Offers', icon: Percent, color: '#FFD700', bgColor: '#FFFBEB' },
    { id: 'payments', name: 'Payments', icon: CreditCard, color: '#22C55E', bgColor: '#F0FDF4' },
    { id: 'privacy', name: 'Privacy & Security', icon: Shield, color: '#3B82F6', bgColor: '#EEF2FF' },
    { id: 'brands', name: 'Brand Partners', icon: Store, color: '#EC4899', bgColor: '#FDF2F8' },
    { id: 'tech', name: 'Technical Issues', icon: Settings, color: '#8B5CF6', bgColor: '#F5F3FF' },
  ];

  // Exactly 34 fully written out Q&As categorized
  const faqData: FAQItem[] = [
    // CATEGORY 1 — Coupon Usage (6 questions)
    {
      id: 'coupon-1',
      category: 'coupon',
      question: 'How do I use a coupon code from Couponscrew?',
      answer: 'Find the coupon you want, click "Get Code" to copy it, head to the brand\'s website, add your items to cart, and paste the code at checkout in the promo code field. The discount applies instantly. Takes about 10 seconds. We timed it.'
    },
    {
      id: 'coupon-2',
      category: 'coupon',
      question: 'Why is my coupon code showing as invalid?',
      answer: 'A few things to check: the code may have a minimum order value (read the fine print below the coupon), it might be restricted to specific categories, or it\'s a new-user-only offer. Even the best coupon promo code sites never clean their listings — we do, but brands sometimes change terms without notice. If it\'s not working and was verified recently, report it and we\'ll fix it within 2 hours.'
    },
    {
      id: 'coupon-3',
      category: 'coupon',
      question: 'Can I stack a coupon code with a bank card offer?',
      answer: 'Yes, and honestly this is where the real savings are. Most brands allow one coupon code per order, but you can stack it with a bank card offer (HDFC, ICICI, SBI) on top. Add a cashback app running in the background and you\'re using three layers at once. A ₹5,000 order can realistically come down to ₹3,000 this way.'
    },
    {
      id: 'coupon-4',
      category: 'coupon',
      question: 'Do coupon codes expire?',
      answer: 'They do. Every code has an expiry date set by the brand. We display the validity period on each coupon card and remove expired codes within minutes of them dying — not days later like the best coupon code sites. The "Verified X mins ago" timestamp tells you exactly how fresh the code is.'
    },
    {
      id: 'coupon-5',
      category: 'coupon',
      question: 'What is the difference between a coupon code and a deal?',
      answer: 'A coupon code is a text string you paste at checkout to unlock a discount. A deal is a pre-applied offer that activates automatically when you click through — no code needed. Both save you money. The deal is faster; the coupon often gives a bigger cut. We list both.'
    },
    {
      id: 'coupon-6',
      category: 'coupon',
      question: 'How do I know if a coupon is verified and actually working?',
      answer: 'Every coupon on Couponscrew shows a "Verified X mins/hours ago" timestamp. Our team tests codes before they go live and removes them as soon as they stop working. Our success rate is 92.4% — which means if you grab a code here, it works 9 times out of 10. If you hit that rare miss, report it and we\'ll clean it up fast.'
    },

    // CATEGORY 2 — Account & Login (5 questions)
    {
      id: 'account-1',
      category: 'account',
      question: 'Do I need to create an account to use Couponscrew?',
      answer: 'No registration needed — browse all 10,000+ coupons for free, right now. Creating an account does unlock a few extras: saving favourite coupons, getting deal alerts for brands you follow, and a history of codes you\'ve used. But it\'s completely optional.'
    },
    {
      id: 'account-2',
      category: 'account',
      question: 'How do I create a Couponscrew account?',
      answer: 'Click "Login / Register" in the top navigation, select "Create Account", enter your name, email, and a password, then verify your email. Done in under 2 minutes. Free forever — we\'re not going to surprise you with a subscription.'
    },
    {
      id: 'account-3',
      category: 'account',
      question: 'I forgot my password. How do I reset it?',
      answer: 'Click "Login / Register", then "Forgot Password", enter your registered email, and we\'ll send a reset link within 5 minutes. Check your spam folder if it doesn\'t show up — email providers have a talent for burying the important stuff.'
    },
    {
      id: 'account-4',
      category: 'account',
      question: 'How do I delete my Couponscrew account?',
      answer: 'Go to Account Settings and select "Delete Account", or email us at privacy@couponscrew.com with your registered email. We permanently delete your account and all data within 30 days as per our Privacy Policy. No guilt trips, no dark patterns — if you want out, you\'re out.'
    },
    {
      id: 'account-5',
      category: 'account',
      question: 'Can I change my registered email address?',
      answer: 'Yes. Log in, go to Account Settings, and update your email. You\'ll get a verification link on the new address to confirm the change. If anything goes wrong, email support@couponscrew.com and we\'ll sort it.'
    },

    // CATEGORY 3 — Deals & Offers (5 questions)
    {
      id: 'deals-1',
      category: 'deals',
      question: 'How does Couponscrew find all these deals?',
      answer: 'We have a team that monitors 500+ brand websites, newsletters, and partner portals daily. We also get exclusive codes directly from brand partners. Every deal is manually verified before it goes live — we\'re not a bot scraping dead codes from 2019 and hoping for the best.'
    },
    {
      id: 'deals-2',
      category: 'deals',
      question: 'Are the deals on Couponscrew actually exclusive?',
      answer: 'Honest answer: some are, some aren\'t. When a code is genuinely exclusive — shared directly by a brand partner and unavailable elsewhere — we say so. When it\'s a widely available offer we\'ve verified and organised, we\'ll say that too. We\'d rather give you two working codes than 47 "exclusive" ones that do nothing — which is what most best deals sites actually offer.'
    },
    {
      id: 'deals-3',
      category: 'deals',
      question: 'How often are new deals added?',
      answer: 'Every day. During sale events like Big Billion Days, Great Indian Festival, or Myntra\'s End of Reason Sale, we\'re adding dozens of offers in real time. Subscribe to our newsletter or follow us on social for instant alerts when something big drops.'
    },
    {
      id: 'deals-4',
      category: 'deals',
      question: 'What categories of deals does Couponscrew cover?',
      answer: 'Fashion, Electronics, Food & Grocery, Travel, Health & Beauty, Web Hosting, Education, Entertainment, Home & Kitchen — 9 categories, 500+ brands. If Indians buy it online, we probably have a coupon for it.'
    },
    {
      id: 'deals-5',
      category: 'deals',
      question: 'Can I submit a deal or coupon I found?',
      answer: 'Yes — and we genuinely appreciate it. Use "Submit a Coupon" in the Contact Us form. Our team verifies it within 24 hours and publishes it if it works. The more verified codes in the system, the better it is for everyone. Including you, next time you need one.'
    },

    // CATEGORY 4 — Payments (4 questions)
    {
      id: 'payments-1',
      category: 'payments',
      question: 'Is Couponscrew free to use?',
      answer: 'Free. No subscription, no premium tier, no "unlock 5 more coupons for ₹99/month". Every coupon on this site is accessible to everyone at zero cost. We make money through affiliate commissions — when you buy through our links, the brand pays us a small cut. You save money, we earn a commission from the brand, the brand gets a sale. Everyone wins.'
    },
    {
      id: 'payments-2',
      category: 'payments',
      question: 'Does Couponscrew process any payments?',
      answer: 'No. We don\'t touch your money at any point. We show you the deal, you click through to the brand\'s official website, and you pay them directly. Your card details, UPI, wallet — none of it ever passes through us.'
    },
    {
      id: 'payments-3',
      category: 'payments',
      question: 'Will I be charged if I click on a coupon or deal?',
      answer: 'Never. Clicking is free. We redirect you to the brand\'s website with the deal ready to go. No charges, no subscriptions, no hidden fees. If something ever charges you just for clicking a link on Couponscrew, something has gone very wrong — please report it immediately.'
    },
    {
      id: 'payments-4',
      category: 'payments',
      question: 'What if I got charged unexpectedly after using a Couponscrew coupon?',
      answer: 'Couponscrew has no role in the billing process — all transactions happen directly with the brand. If something looks wrong on your bill, contact the brand\'s customer support first. You can also email us at support@couponscrew.com and we\'ll help however we can, including flagging the brand if there\'s a pattern.'
    },

    // CATEGORY 5 — Privacy & Security (5 questions)
    {
      id: 'privacy-1',
      category: 'privacy',
      question: 'Is it safe to use Couponscrew?',
      answer: 'Yes. We use 256-bit SSL encryption, we never ask for your payment details, and we don\'t sell your personal data. We\'re compliant with India\'s Digital Personal Data Protection Act 2023. The short version: we\'re a coupon site, not a data broker.'
    },
    {
      id: 'privacy-2',
      category: 'privacy',
      question: 'Does Couponscrew sell my personal data?',
      answer: 'No. Your data is used to improve your experience on Couponscrew — personalising deal recommendations, sending newsletters if you opted in. That\'s it. We don\'t sell, rent, or trade your information with third parties. Not now, not ever.'
    },
    {
      id: 'privacy-3',
      category: 'privacy',
      question: 'What data does Couponscrew collect?',
      answer: 'Basic stuff — your name and email if you register, plus usage data like which pages you visit and which coupons you interact with. We use cookies for analytics and to remember your preferences. Our full Privacy Policy has every detail if you want to go deep on it.'
    },
    {
      id: 'privacy-4',
      category: 'privacy',
      question: 'How do I opt out of Couponscrew emails?',
      answer: 'Every email has an "Unsubscribe" link at the bottom — one click and you\'re out. You can also update preferences in Account Settings. Transactional emails (password resets, security alerts) can\'t be turned off because they\'re genuinely about your account security, not marketing.'
    },
    {
      id: 'privacy-5',
      category: 'privacy',
      question: 'How do I report a security issue on Couponscrew?',
      answer: 'Email security@couponscrew.com immediately. We take every report seriously and respond within 24 hours. If you\'ve found a genuine vulnerability, we want to know — and we\'ll fix it fast.'
    },

    // CATEGORY 6 — Brand Partners (4 questions)
    {
      id: 'brands-1',
      category: 'brands',
      question: 'How can my brand partner with Couponscrew?',
      answer: 'Email us at partnerships@couponscrew.com or use the Contact Us form with "Brand Partnership" as the category. We work with 500+ brands already — from D2C startups to established names. Our partnerships team will get back to you within 24 hours.'
    },
    {
      id: 'brands-2',
      category: 'brands',
      question: 'How does the brand partnership work?',
      answer: 'It\'s a CPS (Cost Per Sale) model — you share coupon codes with us, we publish them for our 50,000+ users, and you pay us a commission only when we deliver an actual purchase. Performance-based, no upfront spend. You get visibility, we get a commission, users get a deal.'
    },
    {
      id: 'brands-3',
      category: 'brands',
      question: 'Can small or new brands join Couponscrew?',
      answer: 'Yes. We work with brands of all sizes. If you have genuine offers for Indian shoppers and the ability to track affiliate sales, we\'d love to feature you. D2C brands, regional players, and new launches are all welcome. Email partnerships@couponscrew.com.'
    },
    {
      id: 'brands-4',
      category: 'brands',
      question: 'How do I advertise on Couponscrew?',
      answer: 'We offer featured placements, homepage banners, category sponsorships, and newsletter advertising. Email ads@couponscrew.com or use "Advertise With Us" in the Contact form. We\'ll send you the media kit with audience stats and pricing.'
    },

    // CATEGORY 7 — Technical Issues (5 questions)
    {
      id: 'tech-1',
      category: 'tech',
      question: 'The Couponscrew website is not loading properly. What do I do?',
      answer: 'Try these in order: clear your browser cache and cookies, try a different browser, turn off browser extensions (ad blockers in particular love blocking the best coupon code sites), check your connection, then try on a different device. Still broken? Email support@couponscrew.com with your browser and OS — we\'ll look into it.'
    },
    {
      id: 'tech-2',
      category: 'tech',
      question: 'The coupon code is not copying when I click "Get Code". Help.',
      answer: 'This is almost always a browser clipboard permissions issue. Make sure your browser has clipboard access enabled for our site. Try clicking "Get Code" again, or just manually select and copy the code text. Older browsers are the usual culprit — updating usually fixes it instantly.'
    },
    {
      id: 'tech-3',
      category: 'tech',
      question: 'Couponscrew looks broken on my mobile. What\'s wrong?',
      answer: 'We\'re fully optimised for mobile. If something looks off, try refreshing the page or clearing your mobile browser cache. Switching to Chrome or Safari usually helps if you\'re on a less common browser. If it\'s still broken, send us a screenshot at support@couponscrew.com — that helps us diagnose it fast.'
    },
    {
      id: 'tech-4',
      category: 'tech',
      question: 'I submitted a coupon but it hasn\'t appeared yet. Why?',
      answer: 'All submitted coupons go through manual verification — we test the code, confirm the discount, and check the terms before publishing. That usually takes 24-48 hours. If your code is valid, it\'ll go live. You\'ll get a confirmation email once it\'s published.'
    },
    {
      id: 'tech-5',
      category: 'tech',
      question: 'How do I report a broken or expired coupon?',
      answer: 'Use the Contact Us page, select "Coupon Not Working", and mention the coupon code and brand name. We fix reported coupons within 2 hours. If you\'re the tenth person to report it, we\'ve probably already killed it — but the report still helps us track patterns.'
    }
  ];

  // Logic to count elements per category dynamically for pristine data representation
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(cat => {
      counts[cat.id] = faqData.filter(item => item.category === cat.id).length;
    });
    return counts;
  }, [faqData, categories]);

  // Handle active filter and query changes smoothly
  const filteredFAQs = useMemo(() => {
    return faqData.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, faqData]);

  // Give feedbaack trigger to accordion visual rating
  const handleFeedback = (id: string, type: 'helpful' | 'unhelpful') => {
    setFeedback(prev => ({ ...prev, [id]: type }));
  };

  const handlePopularTagClick = (tag: string, categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchQuery(tag);
    // Smooth scrolling to the FAQ content area
    const el = document.getElementById('faq-explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased">
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 1 â€" HERO BANNER */}
        <section className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] min-h-[500px] flex items-center relative overflow-hidden py-16">
          {/* Decorative Dot Grid */}
          <div className="absolute top-10 left-10 grid grid-cols-5 gap-3 pointer-events-none opacity-20">
            {Array.from({ length: 25 }).map((_, idx) => (
              <div key={idx} className="w-1.5 h-1.5 bg-white rounded-full"></div>
            ))}
          </div>
          {/* Decorative Circles */}
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#5B4FBE] opacity-30 mix-blend-multiply filter blur-xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#FF5722] opacity-15 filter blur-lg pointer-events-none"></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-[#FFD700] animate-pulse pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left side Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2 select-none shadow-sm">
                <HelpCircle className="w-4 h-4 text-[#FFD700]" />
                <span className="tracking-wide uppercase">FREQUENTLY ASKED QUESTIONS</span>
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white tracking-tight">
                Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-orange-400">Questions?</span><br />
                We&apos;ve Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-300 font-extrabold">Answers.</span>
              </h1>

              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                Everything you need to know about using Couponscrew — from copying codes to stacking bank card offers. Real answers, no corporate filler. If something is missing, just ask.
              </p>

              {/* Stat pillars list */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="bg-white/10 hover:bg-white/15 transition-colors border border-white/10 text-white text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 select-none backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
                  <span className="font-semibold text-white">50+ Questions Answered</span>
                </div>
                <div className="bg-white/10 hover:bg-white/15 transition-colors border border-white/10 text-white text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 select-none backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
                  <span className="font-semibold text-white">7 Categories Covered</span>
                </div>
                <div className="bg-white/10 hover:bg-white/15 transition-colors border border-white/10 text-white text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 select-none backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                  <span className="font-semibold text-white">Updated Weekly</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap pt-4">
                <button 
                  onClick={() => {
                    const el = document.getElementById('faq-explorer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#FF5722] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-500 hover:shadow-orange-500/30 transition-all duration-200 cursor-pointer text-sm"
                >
                  Browse All FAQs
                </button>
                <Link href="/contact"
                  className="border-2 border-white/30 text-white hover:bg-white/15 hover:border-white/50 px-8 py-4 rounded-full font-bold transition-all duration-200 inline-flex items-center gap-2 text-sm justify-center"
                >
                  Ask a Question
                </Link>
              </div>
            </div>

            {/* Right side Glass Floating Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shadow-inner">
                    <Search className="w-7 h-7 text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold">Quick Diagnostics</h3>
                    <p className="text-white/60 text-xs">Instantly jump to standard queries</p>
                  </div>
                </div>

                {/* Mini Visual Search Field */}
                <div className="relative">
                  <input
                    type="text"
                    readOnly
                    placeholder="Search your question..."
                    onClick={() => {
                      const el = document.getElementById('faq-explorer');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                        const searchEl = document.getElementById('search-input-field');
                        if (searchEl) searchEl.focus();
                      }
                    }}
                    className="w-full bg-white/10 border border-white/15 rounded-xl py-3 pl-11 pr-4 text-white placeholder-white/40 text-sm focus:outline-none cursor-pointer hover:bg-white/15 transition-colors"
                  />
                  <Search className="w-4.5 h-4.5 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>

                {/* Popular Tags Pills on Click trigger search & category jump */}
                <div className="space-y-3">
                  <span className="text-white/50 text-xs uppercase font-semibold tracking-wider block">Popular Question Tags</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Coupon not working', q: 'valid', cat: 'coupon' },
                      { label: 'How to save', q: 'How do I use a coupon', cat: 'coupon' },
                      { label: 'Free to use?', q: 'Is SaveMate free to use', cat: 'payments' },
                      { label: 'Contact support', q: 'support', cat: 'tech' }
                    ].map((tag, idx) => (
                      <button
                        key={idx}
                        onClick={() => handlePopularTagClick(tag.q, tag.cat)}
                        className="bg-white/10 hover:bg-white/25 active:scale-95 text-white border border-white/10 text-xs px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium"
                      >
                        {tag.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/15 pt-5 flex items-center justify-between text-xs text-white/60">
                  <span>Can't find your answer?</span>
                  <Link href="/contact" className="text-[#FFD700] font-semibold hover:underline flex items-center gap-1">
                    <span>Contact us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 â€" STATS BAR (Negative margins to pull it over the hero) */}
        <section className="relative z-20 -mt-10 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "34 FAQs", sub: "Real answers, no filler", icon: MessageCircle, color: "#5B4FBE", bg: "#F0EEFF" },
              { label: "7 Categories", sub: "Everything covered", icon: Grid, color: "#FF5722", bg: "#FFF3F0" },
              { label: "92.4% Success", sub: "Codes that actually work", icon: RefreshCw, color: "#22C55E", bg: "#F0FDF4" },
              { label: "2-Hour Fix", sub: "Broken code? We fix it fast", icon: ThumbsUp, color: "#3B82F6", bg: "#EEF2FF" }
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 border border-[#E8E8F0] shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform" style={{ backgroundColor: stat.bg }}>
                    <StatIcon className="w-5.5 h-5.5" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <h4 className="text-[#1A1A2E] text-lg font-extrabold block">{stat.label}</h4>
                    <p className="text-[#4A4A6A] text-xs font-semibold block mt-0.5">{stat.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3 â€" CATEGORY FILTER TABS + ACCORDION & SIDEBAR */}
        <section id="faq-explorer" className="bg-[#F8F8FF] py-20">
          <div className="max-w-7xl mx-auto px-6 space-y-10">
            
            {/* CATEGORY FILTER TABS - HORIZONTAL SCROLL ON MOBILE */}
            <div className="bg-white p-2 rounded-2xl border border-[#E8E8F0] shadow-xs">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 pb-1 sm:pb-0 scroll-smooth">
                {/* "All FAQs" tab */}
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setExpandedId(null);
                  }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold shrink-0 transition-all duration-200 cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-[#5B4FBE] text-white shadow-md shadow-indigo-100'
                      : 'text-[#4A4A6A] hover:bg-gray-100 hover:text-[#1A1A2E]'
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                  <span>All FAQs</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeCategory === 'all' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {faqData.length}
                  </span>
                </button>

                {/* Map standard categories list */}
                {categories.map((cat) => {
                  const CatIcon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setExpandedId(null);
                      }}
                      className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold shrink-0 transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#5B4FBE] text-white shadow-md shadow-indigo-100'
                          : 'text-[#4A4A6A] hover:bg-gray-100 hover:text-[#1A1A2E]'
                      }`}
                    >
                      <CatIcon className="w-3.5 h-3.5" />
                      <span>{cat.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {categoryCounts[cat.id]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TWO COLUMN GRID â€" ACCORDION (LEFT 65%) vs STICKY SIDEBAR (RIGHT 35%) */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 items-start">
              
              {/* ACCORDION (LEFT 65% â€" lg:col-span-6 or 7) */}
              <div className="lg:col-span-6.5 lg:col-span-7 space-y-10">
                
                {/* Dynamic search results message if searching */}
                {searchQuery.trim() !== '' && (
                  <div className="bg-[#F0EEFF] text-[#5B4FBE] px-5 py-4 rounded-2xl flex items-center justify-between">
                    <span className="text-xs font-bold">
                      Found {filteredFAQs.length} questions matching "{searchQuery}"
                    </span>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs underline cursor-pointer font-bold hover:text-[#FF5722]"
                    >
                      Clear Search
                    </button>
                  </div>
                )}

                {filteredFAQs.length === 0 ? (
                  <div className="bg-white rounded-3xl p-12 border border-[#E8E8F0] text-center space-y-4">
                    <HelpCircle className="w-16 h-16 text-gray-300 mx-auto" />
                    <h3 className="text-lg font-bold text-[#1A1A2E]">No answers found</h3>
                    <p className="text-sm text-[#4A4A6A] max-w-md mx-auto">
                      We couldn't find any FAQs matching your criteria. Try adjusting your category filter, clearing your search search queries, or contact our support team.
                    </p>
                    <button
                      onClick={() => {
                        setActiveCategory('all');
                        setSearchQuery('');
                      }}
                      className="bg-[#5B4FBE] text-white px-6 py-2.5 rounded-full font-bold text-xs inline-flex items-center gap-2"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  // Group FAQ accordion lists cleanly
                  <div className="space-y-12">
                    {/* Render grouped listing */}
                    {categories.map((cat) => {
                      // Filter category questions
                      const catSpecificQuestions = filteredFAQs.filter(item => item.category === cat.id);
                      
                      if (catSpecificQuestions.length === 0) return null;

                      // Display logic: only display Category Headers if "All FAQs" is active
                      const showCategoryHeading = activeCategory === 'all';

                      return (
                        <div key={cat.id} className="space-y-5">
                          {showCategoryHeading && (
                            <div className="flex items-center justify-between border-b border-[#E8E8F0] pb-3">
                              <div className="flex items-center gap-2.5">
                                <div className="p-2 rounded-xl" style={{ backgroundColor: cat.bgColor }}>
                                  <cat.icon className="w-5 h-5" style={{ color: cat.color }} />
                                </div>
                                <h3 className="text-base font-extrabold text-[#1A1A2E] uppercase tracking-wide">
                                  {cat.name}
                                </h3>
                              </div>
                              <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full">
                                {catSpecificQuestions.length} Questions
                              </span>
                            </div>
                          )}

                          {/* Accordion List for this category */}
                          <div className="space-y-4">
                            {catSpecificQuestions.map((item, index) => {
                              const isOpen = expandedId === item.id;
                              return (
                                <div
                                  key={item.id}
                                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                                    isOpen 
                                      ? 'border-[#5B4FBE] shadow-lg shadow-indigo-100' 
                                      : 'border-[#E8E8F0] hover:border-[#5B4FBE]/50'
                                  }`}
                                >
                                  {/* Accordion Trigger Header */}
                                  <button
                                    onClick={() => setExpandedId(isOpen ? null : item.id)}
                                    className={`w-full text-left flex items-center justify-between p-5 transition-all duration-200 ${
                                      isOpen ? 'bg-[#F0EEFF]/50' : 'bg-white hover:bg-gray-50/50'
                                    }`}
                                  >
                                    <div className="flex items-center gap-3.5 pr-4">
                                      {/* Numeric badge */}
                                      <div className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                                        isOpen ? 'bg-[#5B4FBE] text-white' : 'bg-[#F0EEFF] text-[#5B4FBE]'
                                      }`}>
                                        {index + 1}
                                      </div>
                                      <span className="font-bold text-[#1A1A2E] text-sm sm:text-base leading-tight">
                                        {item.question}
                                      </span>
                                    </div>
                                    <div className="shrink-0 ml-2">
                                      {isOpen ? (
                                        <ChevronUp className="w-5 h-5 text-[#5B4FBE]" />
                                      ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                      )}
                                    </div>
                                  </button>

                                  {/* Accordion Expandable Content */}
                                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] border-t border-[#E8E8F0]' : 'max-h-0'}`}>
                                    {isOpen && (
                                      <div className="p-6 space-y-5 bg-white">
                                        <p className="text-sm text-[#4A4A6A] leading-relaxed">
                                          {item.answer}
                                        </p>

                                        {/* "Was this helpful?" trigger block */}
                                        <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                                          <span className="text-gray-400 font-medium">Was this response helpful to you?</span>
                                          <div className="flex items-center gap-2">
                                            {feedback[item.id] ? (
                                              <span className="text-[#22C55E] font-bold flex items-center gap-1">
                                                <ShieldCheck className="w-4 h-4" />
                                                <span>Thank you for your feedback!</span>
                                              </span>
                                            ) : (
                                              <>
                                                <button
                                                  onClick={() => handleFeedback(item.id, 'helpful')}
                                                  className="hover:bg-[#F0FDF4] hover:text-[#22C55E] hover:border-[#22C55E] text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer font-semibold"
                                                >
                                                  <ThumbsUp className="w-3.5 h-3.5" />
                                                  <span>Yes</span>
                                                </button>
                                                <button
                                                  onClick={() => handleFeedback(item.id, 'unhelpful')}
                                                  className="hover:bg-red-50 hover:text-red-500 hover:border-red-400 text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer font-semibold"
                                                >
                                                  <ThumbsDown className="w-3.5 h-3.5" />
                                                  <span>No</span>
                                                </button>
                                              </>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* STICKY SIDEBAR (RIGHT 35% â€" lg:col-span-3 or 4) */}
              <div className="lg:col-span-3.5 lg:col-span-3 space-y-6 lg:sticky lg:top-24">
                
                {/* Card 1 â€" Search FAQs (Visual Only as input binds search) */}
                <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm space-y-4">
                  <h4 className="text-sm font-extrabold text-[#1A1A2E] tracking-wider uppercase">Search FAQ Collection</h4>
                  <div className="relative">
                    <input
                      id="search-input-field"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Type keywords..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-[#1A1A2E] placeholder-gray-400 text-xs focus:outline-none focus:border-[#5B4FBE] focus:bg-white transition-colors"
                    />
                    <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>

                  {/* Topic Pill Actions */}
                  <div className="space-y-2 pt-2">
                    <span className="text-gray-400 text-[10px] tracking-wider font-bold uppercase block">Quick Search Tags</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: 'Coupon Code', q: 'coupon', cat: 'coupon' },
                        { label: 'Account', q: 'reset', cat: 'account' },
                        { label: 'Free to Use', q: 'free', cat: 'payments' },
                        { label: 'Data Privacy', q: 'privacy', cat: 'privacy' },
                        { label: 'Brand Partner', q: 'partner', cat: 'brands' }
                      ].map((pill, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveCategory(pill.cat);
                            setSearchQuery(pill.q);
                          }}
                          className="bg-[#F0EEFF] text-[#5B4FBE] hover:bg-[#5B4FBE] hover:text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          {pill.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card 2 â€" Browse by Category (Fully synced with filter state) */}
                <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm space-y-4">
                  <h4 className="text-sm font-extrabold text-[#1A1A2E] tracking-wider uppercase">Browse by Category</h4>
                  <div className="space-y-1.5">
                    {categories.map((cat) => {
                      const CatIcon = cat.icon;
                      const isSelected = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setActiveCategory(cat.id);
                            setExpandedId(null);
                          }}
                          className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer text-xs ${
                            isSelected 
                              ? 'bg-[#5B4FBE] text-white font-bold shadow-sm' 
                              : 'bg-white text-gray-600 hover:bg-[#F0EEFF]/50 hover:text-[#5B4FBE]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <CatIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-gray-400'}`} style={isSelected ? {} : { color: cat.color }} />
                            <span className="truncate">{cat.name}</span>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {categoryCounts[cat.id]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Card 3 â€" Still Need Help? (Sticky detailed CTA Card) */}
                <div className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] rounded-2xl p-6 shadow-md text-white space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full pointer-events-none"></div>
                  
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-sm tracking-wide text-white">Still have questions?</h4>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Can&apos;t find your specific solution? Our support department answers standard queries within 2 hours.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <Link href="/contact"
                      className="block w-full text-center bg-[#FF5722] hover:bg-orange-500 text-white py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer"
                    >
                      Contact Us
                    </Link>
                    <a
                      href="mailto:support@savemate.in"
                      className="block w-full text-center border border-white/20 hover:bg-white/10 text-white py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Email Support
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-2 text-[10px] text-white/50">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#FFD700]" />
                      <span>support@savemate.in</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#22C55E]" />
                      <span>+91 98765 43210</span>
                    </div>
                  </div>
                </div>

                {/* Card 4 â€" Quick Stats */}
                <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm space-y-4">
                  <h4 className="text-sm font-extrabold text-[#1A1A2E] tracking-wider uppercase">SaveMate by Numbers</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F8F8FF] p-3 rounded-xl text-center">
                      <strong className="text-base sm:text-lg font-black text-[#5B4FBE] block">10,000+</strong>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-1">Coupons</span>
                    </div>
                    <div className="bg-[#F8F8FF] p-3 rounded-xl text-center">
                      <strong className="text-base sm:text-lg font-black text-[#FF5722] block">500+</strong>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-1">Brands</span>
                    </div>
                    <div className="bg-[#F8F8FF] p-3 rounded-xl text-center">
                      <strong className="text-base sm:text-lg font-black text-[#22C55E] block">50,000+</strong>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-1">Users</span>
                    </div>
                    <div className="bg-[#F8F8FF] p-3 rounded-xl text-center">
                      <strong className="text-base sm:text-lg font-black text-sky-500 block">92.4%</strong>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-1">Success</span>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>

          </div>
        </section>

        {/* SECTION 4 â€" DIDN'T FIND YOUR ANSWER BANNER */}
        <section className="bg-gradient-to-r from-[#FF5722] via-[#FF7043] to-[#FF8A50] py-16 text-white relative overflow-hidden">
          {/* Subtle details */}
          <div className="absolute top-0 left-0 w-32 h-full bg-white/5 rounded-r-full filter blur-xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-48 h-full bg-white/5 rounded-l-full filter blur-xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-3xl font-black tracking-tight text-white">Still have a question?</h2>
              <p className="text-white/85 text-base font-medium">
                Ask us directly — we reply within 2 hours. No bots, no ticket queues.
              </p>
            </div>
            
            <div className="flex gap-4 flex-wrap shrink-0">
              <Link href="/contact"
                className="bg-white text-[#FF5722] hover:bg-orange-50 px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md select-all text-center"
              >
                Ask a Question
              </Link>
              <Link href="/"
                className="border border-white/40 hover:bg-white/15 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all text-center"
              >
                Browse Coupons
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5 â€" BOTTOM TRUST STRIP */}
        <section className="bg-white py-14 border-t border-[#E8E8F0] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Verified Answers", desc: "Crafted directly by discount operators.", icon: ShieldCheck },
                { title: "Updated Weekly", desc: "Polished answers with current system details.", icon: RefreshCw },
                { title: "Expert Team", desc: "A dedicated group of coupon specialists.", icon: Users },
                { title: "Always Free", desc: "Zero paid wall constraints on save utilities.", icon: Heart }
              ].map((badge, idx) => {
                const BadgeIcon = badge.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-2">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <BadgeIcon className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1A1A2E]">{badge.title}</h4>
                      <p className="text-xs text-[#4A4A6A] leading-relaxed mt-1">{badge.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}



