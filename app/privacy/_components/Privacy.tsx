'use client';

import React, { useState } from 'react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import {
  FileText, Shield, AlertTriangle, CheckCircle,
  XCircle, Globe, Lock, RefreshCw, Mail, Phone,
  ChevronDown, ChevronUp, Scale, Eye, Cookie,
  CreditCard, UserX, Ban, ArrowRight, Info,
  BookOpen, Gavel, Clock, Star, User, Trash
} from 'lucide-react';

// TypeScript interfaces
interface PrivacySection {
  id: number;
  icon: React.ComponentType<any>;
  iconColor: string;
  iconBg: string;
  title: string;
  lastUpdated: string;
  summary: string;
  points: string[];
}

interface TableOfContents {
  id: number;
  title: string;
  icon: React.ComponentType<any>;
}

export default function Privacy() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const tableOfContents: TableOfContents[] = [
    { id: 1, title: "Information We Collect", icon: FileText },
    { id: 2, title: "How We Use Your Data", icon: Eye },
    { id: 3, title: "Data Sharing Policy", icon: Globe },
    { id: 4, title: "Cookies & Tracking", icon: Cookie },
    { id: 5, title: "Data Security", icon: Lock },
    { id: 6, title: "Your Rights & Choices", icon: Scale },
    { id: 7, title: "Third-Party Links", icon: ArrowRight },
    { id: 8, title: "Children's Privacy", icon: Ban },
    { id: 9, title: "Data Retention", icon: Clock },
    { id: 10, title: "Contact & Updates", icon: RefreshCw },
  ];

  const privacySections: PrivacySection[] = [
    {
      id: 1,
      icon: FileText,
      iconColor: "#5B4FBE",
      iconBg: "#F0EEFF",
      title: "1. Information We Collect",
      lastUpdated: "January 2025",
      summary: "What we collect and why - nothing you wouldn't expect.",
      points: [
        "Account details: your name, email address, and password (stored as a hash - we never see your actual password) when you register.",
        "Usage data: which pages you visit, which deals you click, and how long you spend on the platform. This helps us show you more relevant coupons.",
        "Device info: browser type, operating system, and IP address. Standard stuff for any website to function correctly.",
        "Coupon activity: which digital coupons you copy, which stores you visit most, and which categories you browse. Used purely to personalise your deal feed.",
        "Messages you send us: support emails, feedback, and any direct communications. We keep these to resolve issues properly.",
        "Affiliate click data: when you click through to a brand via our affiliate link, we log that referral so we can track commissions. This is how we keep the platform free."
      ]
    },
    {
      id: 2,
      icon: Eye,
      iconColor: "#0EA5E9",
      iconBg: "#F0F9FF",
      title: "2. How We Use Your Data",
      lastUpdated: "January 2025",
      summary: "Your data makes the platform work better for you. That is the only goal.",
      points: [
        "Personalised deal feed: we use your browsing and coupon history to surface deals you are actually interested in, not random noise.",
        "Deal alerts: if you opt in, we send newsletters and deal notifications. You can unsubscribe any time - one click, no hoops.",
        "Platform improvement: we look at aggregate usage patterns to fix slow pages, broken flows, and anything that makes the experience worse.",
        "Fraud prevention: we monitor for bot activity, bulk scraping, and account abuse to protect the platform and genuine users.",
        "Transactional emails: account confirmations, security alerts, and policy update notices. These are not marketing - they are necessary.",
        "Anonymous reporting: we share aggregated, non-identifiable data with brand partners to show them how their deals perform. No individual data ever leaves."
      ]
    },
    {
      id: 3,
      icon: Globe,
      iconColor: "#8B5CF6",
      iconBg: "#F5F3FF",
      title: "3. Data Sharing Policy",
      lastUpdated: "January 2025",
      summary: "We do not sell your data. Full stop.",
      points: [
        "We never sell, rent, trade, or share individual user data with third parties for their own marketing or commercial use. Not now, not ever.",
        "We share anonymous, aggregated summaries with brand partners - things like coupon success rates and category click volumes. Nothing that identifies you.",
        "We use a small number of trusted service providers (email delivery, analytics infrastructure). They only access what they need to do their job and are bound by strict data agreements.",
        "We may disclose data if required by valid Indian law, a court order, or the Digital Personal Data Protection Act 2023. We will tell you if this happens unless legally prevented.",
        "If Couponscrew is acquired or merges with another company, user data would transfer as part of that - we would notify you in advance.",
        "Every third-party contractor handling data is contractually required to meet the same standards we hold ourselves to."
      ]
    },
    {
      id: 4,
      icon: Cookie,
      iconColor: "#F59E0B",
      iconBg: "#FFFBEB",
      title: "4. Cookies & Tracking",
      lastUpdated: "January 2025",
      summary: "We use cookies to make the platform work and to track affiliate commissions.",
      points: [
        "Session cookies: keep you logged in as you browse the platform. Without these, you would have to sign in on every page click.",
        "Analytics cookies: help us understand traffic patterns, popular pages, and bounce rates so we can improve the experience.",
        "Affiliate attribution cookies: when you click through to a brand, a cookie records that referral. This is how we earn commission and keep Couponscrew free to use.",
        "Third-party cookies: some brand links carry their own tracking from the retailer. Once you leave our site for other discount code sites, their privacy policy applies.",
        "You can disable or clear cookies in your browser settings at any time. Some parts of the platform may not work correctly if you do.",
        "By continuing to use Couponscrew, you agree to the use of cookies as described here."
      ]
    },
    {
      id: 5,
      icon: Lock,
      iconColor: "#22C55E",
      iconBg: "#F0FDF4",
      title: "5. Data Security",
      lastUpdated: "January 2025",
      summary: "We use standard industry security practices to protect your data.",
      points: [
        "All data transmitted between your browser and our servers is encrypted via 256-bit SSL. The same standard your bank uses.",
        "Passwords are hashed and salted before storage. Even we cannot read your password - that is the point.",
        "We run regular security audits and penetration tests to find and fix vulnerabilities before they become problems.",
        "Backend access is restricted on a need-to-know basis. Not everyone on the team can access user account data.",
        "If we ever detect a security breach affecting your data, we will notify you and the relevant Indian data protection authorities within 72 hours.",
        "Our databases sit behind enterprise-grade firewalls. Automated attack attempts are blocked at the network level."
      ]
    },
    {
      id: 6,
      icon: Scale,
      iconColor: "#EC4899",
      iconBg: "#FDF2F8",
      title: "6. Your Rights & Choices",
      lastUpdated: "January 2025",
      summary: "Your data, your rules. Here is what you can ask us to do.",
      points: [
        "Right to access: you can request a copy of all personal data we hold about you. Email us and we will send it within 30 days.",
        "Right to correction: if any information we hold is wrong, you can ask us to fix it. We will.",
        "Right to deletion: you can ask us to delete your account and all associated data. We will complete this within 30 days of your request.",
        "Opt out of marketing: unsubscribe from any non-essential email using the link at the bottom of every newsletter. Takes one click.",
        "Data portability: you can request your coupon history and account data in a machine-readable format.",
        "To exercise any of these rights, email privacy@couponscrew.com. We are real people and we will respond."
      ]
    },
    {
      id: 7,
      icon: ArrowRight,
      iconColor: "#FF5722",
      iconBg: "#FFF3F0",
      title: "7. Third-Party Links",
      lastUpdated: "January 2025",
      summary: "When you click a deal, you leave our platform. Their rules apply from that point.",
      points: [
        "Every digital coupon and deal link on Couponscrew routes you to the brand or retailer to complete your purchase. That is the point.",
        "Once you are on a third-party discount web site, their privacy policy governs how your data is handled. We have no control over that.",
        "We recommend reading the privacy policy of any brand before entering payment or personal details at checkout.",
        "Our affiliate links carry a referral tag so the brand knows the sale came through Couponscrew. This is standard affiliate practice and does not share your personal details.",
        "Some pages include optional social sharing buttons. If you use them, those platforms (Facebook, WhatsApp, etc.) have their own tracking - check their policies."
      ]
    },
    {
      id: 8,
      icon: Ban,
      iconColor: "#EF4444",
      iconBg: "#FEF2F2",
      title: "8. Children's Privacy",
      lastUpdated: "January 2025",
      summary: "Couponscrew is not for users under 13. We do not collect data from children.",
      points: [
        "Couponscrew is designed for users aged 18 and above. We do not knowingly collect data from anyone under 13.",
        "If we discover an account belonging to someone under 13, we will delete it and all associated data immediately.",
        "If you are a parent or guardian and believe your child has registered on Couponscrew, email privacy@couponscrew.com and we will act within 24 hours.",
        "Our platform complies with relevant international standards on children's online privacy protection.",
        "We do not partner with or promote brands selling tobacco, alcohol, gambling, or adult content."
      ]
    },
    {
      id: 9,
      icon: Clock,
      iconColor: "#6366F1",
      iconBg: "#EEF2FF",
      title: "9. Data Retention",
      lastUpdated: "January 2025",
      summary: "We keep your data while your account is active. We delete it when you ask.",
      points: [
        "We keep your account data for as long as your account remains active. If you stop using Couponscrew, your data stays on file until you request deletion.",
        "When you delete your account, all personal data is permanently removed from our production servers within 30 days.",
        "Backup snapshots may retain data for up to 90 days before automatic overwrite. These are not accessible for normal operations.",
        "Anonymised usage data - stripped of all identifiers - may be retained for longer for analytics and platform improvement purposes.",
        "Transaction and commission records are retained for the duration required by Indian tax and financial regulations."
      ]
    },
    {
      id: 10,
      icon: RefreshCw,
      iconColor: "#10B981",
      iconBg: "#ECFDF5",
      title: "10. Contact & Updates",
      lastUpdated: "January 2025",
      summary: "We update this policy when needed. We will tell you when we do.",
      points: [
        "We review and update this Privacy Policy at least once a year, or sooner if laws change or the platform changes significantly.",
        "For significant changes, we will notify you via email or a notice on the platform before the change takes effect.",
        "We recommend checking this page periodically. The date at the top always reflects the last update.",
        "For privacy questions, data requests, or anything in this policy you want clarified - email privacy@couponscrew.com.",
        "For general support, email support@couponscrew.com. We reply within 2 hours, Monday to Saturday.",
        "Continuing to use Couponscrew after a policy update means you have accepted the revised terms."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 1 - HERO BANNER */}
        <section className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] min-h-[460px] flex items-center relative overflow-hidden py-16">
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white opacity-5 pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#FF5722] opacity-10 pointer-events-none"></div>

          <div className="absolute top-10 left-10 grid grid-cols-5 gap-3 pointer-events-none">
            {Array.from({ length: 25 }).map((_, idx) => (
              <div key={idx} className="w-1 h-1 bg-white opacity-20 rounded-full"></div>
            ))}
          </div>

          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-[#FFD700] animate-pulse opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column (55%) */}
            <div className="md:col-span-7 space-y-6">
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-5 py-2 rounded-full inline-flex items-center gap-2 select-none">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>YOUR PRIVACY MATTERS</span>
              </span>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white block">
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-[#FF8A00]">Policy</span>
                <span className="block text-2xl md:text-4xl text-[#FFD700] mt-2 font-medium">We Keep Your Data Safe</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                Short version: we collect what we need to run the platform, we never sell your data, and you can delete everything anytime. The full version is below - written in plain language, not legalese.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <div className="bg-white/10 border border-white/20 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 select-none backdrop-blur-xs">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero Data Sold</span>
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 select-none backdrop-blur-xs">
                  <Lock className="w-3.5 h-3.5 text-[#FFD700]" />
                  <span>256-bit SSL Encryption</span>
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 select-none backdrop-blur-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                  <span>GDPR Compliant</span>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap mt-8">
                <button
                  onClick={() => {
                    const el = document.getElementById("main-policy-accordion");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#FF5722] text-white px-7 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:bg-orange-500 transition shadow-lg shadow-orange-500/30 cursor-pointer"
                >
                  <span>Read Full Policy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="mailto:privacy@couponscrew.com"
                  className="border-2 border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4.5 h-4.5" />
                  <span>Contact Privacy Team</span>
                </a>
              </div>
            </div>

            {/* Right Column (45%) */}
            <div className="hidden md:col-span-5 md:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-7 shadow-2xl space-y-6">
                <div>
                  <Shield className="w-10 h-10 text-[#FFD700] mx-auto filter drop-shadow-md" />
                  <h2 className="text-white font-bold text-lg text-center mt-3 font-sans">Quick Privacy Summary</h2>
                </div>

                <div className="space-y-3 mt-5">
                  {[
                    "We never sell your personal data to anyone",
                    "All data in transit is protected by 256-bit SSL",
                    "You can request full account deletion anytime",
                    "Cookies are used to personalise your deal feed",
                    "Affiliate links are how we keep the platform free"
                  ].map((pt, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-5 mt-6 flex items-start gap-2 text-white/50 text-xs text-center justify-center">
                  <Info className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                  <span>By using Couponscrew, you accept the practices outlined in this policy.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 - TRUST BADGES ROW */}
        <section className="-mt-12 relative z-20 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Data Encrypted", text: "256-bit SSL", desc: "All connections secured", icon: Lock, color: "#5B4FBE", bg: "#F0EEFF" },
                { label: "Zero Data Sold", text: "Ever", desc: "Your info stays private", icon: Shield, color: "#22C55E", bg: "#F0FDF4" },
                { label: "GDPR Compliant", text: "Fully", desc: "Conforms to strict standards", icon: CheckCircle, color: "#0EA5E9", bg: "#F0F9FF" },
                { label: "Delete Anytime", text: "Your Right", desc: "Complete account erasure", icon: Trash, color: "#FF5722", bg: "#FFF3F0" }
              ].map((badge, idx) => {
                const BadgeIcon = badge.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E8E8F0] shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: badge.bg }}>
                      <BadgeIcon className="w-6 h-6" style={{ color: badge.color }} />
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block">{badge.label}</span>
                      <strong className="text-[#1A1A2E] text-base font-bold block mt-0.5">{badge.text}</strong>
                      <span className="text-[#4A4A6A] text-xs block mt-0.5">{badge.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3 - TABLE OF CONTENTS */}
        <section className="bg-white py-12 border-y border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8 border-b border-[#E8E8F0] pb-4">
              <h2 className="text-xl font-bold text-[#1A1A2E]">Table of Contents</h2>
              <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 select-none">
                <FileText className="w-3 h-3" />
                <span>10 Sections</span>
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {tableOfContents.map((toc) => {
                const TocIcon = toc.icon;
                return (
                  <div
                    key={toc.id}
                    onClick={() => {
                      setOpenSection(toc.id);
                      const el = document.getElementById("main-policy-accordion");
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-[#E8E8F0] bg-[#F8F8FF] hover:border-[#5B4FBE] hover:bg-[#F0EEFF] cursor-pointer transition-all duration-200 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#5B4FBE] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {toc.id}
                    </div>
                    <TocIcon className="w-3.5 h-3.5 text-[#5B4FBE] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-[#1A1A2E] leading-tight select-none">
                      {toc.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4 - MAIN ACCORDION + STICKY SIDEBAR */}
        <section id="main-policy-accordion" className="bg-[#F8F8FF] py-20 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-10 gap-10 items-start">

            {/* LEFT - ACCORDION SECTIONS (68% - lg:col-span-7) */}
            <div className="lg:col-span-7">
              {privacySections.map((section) => {
                const SectionIcon = section.icon;
                const isOpen = openSection === section.id;
                return (
                  <div
                    key={section.id}
                    className={`mb-4 rounded-2xl border overflow-hidden transition-all duration-300 ${
                      isOpen ? 'border-[#5B4FBE] shadow-lg shadow-purple-100 bg-white' : 'border-[#E8E8F0] hover:border-[#5B4FBE]/50 bg-white'
                    }`}
                  >
                    {/* Header trigger */}
                    <div
                      onClick={() => setOpenSection(isOpen ? null : section.id)}
                      className={`flex items-center gap-4 p-5 cursor-pointer ${
                        isOpen ? 'bg-gradient-to-r from-[#F0EEFF] to-[#F8F8FF]' : 'bg-white hover:bg-[#F8F8FF]'
                      } transition-all duration-200`}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: section.iconBg }}>
                        <SectionIcon className="w-5.5 h-5.5" style={{ color: section.iconColor }} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-base font-bold text-[#1A1A2E]">{section.title}</h3>
                        <div className="flex items-center gap-3 mt-1 select-none">
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>Updated: {section.lastUpdated}</span>
                          </span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span className="text-xs text-[#5B4FBE] font-medium">
                            {section.points.length} Points
                          </span>
                        </div>
                      </div>

                      <div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#5B4FBE]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>

                    {/* Body content */}
                    {isOpen && (
                      <div className="bg-white border-t border-[#E8E8F0] px-5 pb-6 pt-5">
                        <div className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2 mb-5 select-none">
                          <Info className="w-3.5 h-3.5" />
                          <span>{section.summary}</span>
                        </div>

                        <ul className="space-y-4">
                          {section.points.map((pt, ptIdx) => (
                            <li key={ptIdx} className="flex items-start gap-3">
                              <ArrowRight className="w-4 h-4 text-[#5B4FBE] shrink-0 mt-0.5" />
                              <span className="text-sm text-[#4A4A6A] leading-relaxed">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT - STICKY SIDEBAR (32% - lg:col-span-3) */}
            <div className="lg:col-span-3 sticky top-24 space-y-5">
              {/* CARD 1 - Progress Tracker */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm">
                <h3 className="text-sm font-bold text-[#1A1A2E]">Your Reading Progress</h3>
                <p className="text-xs text-gray-400 mt-1">Click sections to read</p>

                <div className="mt-4">
                  <div className="bg-gray-100 rounded-full h-2 w-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#5B4FBE] to-[#7C3AED] h-2 rounded-full transition-all duration-500"
                      style={{ width: openSection ? `${(openSection / 10) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>

                <p className="text-xs text-[#5B4FBE] font-semibold mt-2 text-right">
                  {openSection ? `Section ${openSection} of 10` : 'Not started'}
                </p>

                <div className="mt-5 space-y-2 border-t border-gray-100 pt-4">
                  {privacySections.slice(0, 6).map((sec) => (
                    <div key={sec.id} className="flex items-center gap-2 text-xs">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${openSection === sec.id ? 'bg-[#5B4FBE]' : 'bg-gray-200'}`}></div>
                      <span className="text-gray-500 truncate max-w-[150px]">{sec.title}</span>
                      {openSection !== null && openSection >= sec.id && (
                        <span className="text-[#22C55E] text-xs font-bold ml-auto select-none">&#10003;</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* CARD 2 - Privacy Commitment Card */}
              <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-2xl p-6 shadow-sm">
                <h3 className="text-white font-bold text-sm">Our Promise to You</h3>
                <p className="text-white/60 text-xs mt-1">The short version</p>

                <div className="mt-5 space-y-3">
                  {[
                    "We never sell your personal data",
                    "Couponscrew is 100% free - no hidden charges",
                    "All data in transit is encrypted via 256-bit SSL",
                    "Delete your account and data anytime - 30 days to clear",
                    "Governed by India's Digital Personal Data Protection Act 2023"
                  ].map((promise, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Star className="text-[#FFD700] fill-[#FFD700] w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <p className="text-white/80 text-xs leading-relaxed">{promise}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CARD 3 - Contact Privacy Team Card */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm">
                <Scale className="text-[#5B4FBE] w-8 h-8 mx-auto" />
                <h3 className="text-base font-bold text-[#1A1A2E] text-center mt-3">Privacy Questions?</h3>
                <p className="text-xs text-[#4A4A6A] text-center mt-2 leading-relaxed">
                  Email us. Real people read and reply - no automated responses, no ticket queues.
                </p>

                <div className="mt-5 space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-[#F0EEFF] rounded-xl select-none">
                    <Mail className="w-4 h-4 text-[#5B4FBE]" />
                    <span className="text-xs font-semibold text-[#5B4FBE]">privacy@couponscrew.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#FFF3F0] rounded-xl select-none">
                    <Phone className="w-4 h-4 text-[#FF5722]" />
                    <span className="text-xs font-semibold text-[#FF5722]">+91 98765 43210</span>
                  </div>
                </div>

                <a
                  href="mailto:privacy@couponscrew.com"
                  className="mt-4 w-full bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white py-3 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2 cursor-pointer shadow-md block text-center"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Privacy Team</span>
                </a>
              </div>

              {/* CARD 4 - Last Updated Notice */}
              <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-[#F59E0B] w-4.5 h-4.5 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-[#1A1A2E]">Last Updated</h4>
                    <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">
                      January 15, 2025 - Next review scheduled for January 2026.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 5 - DATA SAFETY HIGHLIGHTS */}
        <section className="bg-white py-20 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs text-[#5B4FBE] font-bold uppercase tracking-widest bg-[#F0EEFF] px-4 py-1.5 rounded-full select-none inline-block">Data Transparency</span>
              <h2 className="text-3xl font-bold text-[#1A1A2E]">Three Things We Take Seriously</h2>
              <p className="text-sm text-[#4A4A6A] leading-relaxed">Security, transparency, and your control over your own data. These are not marketing lines - they are how the platform actually works.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - End-to-End Encryption */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-8 shadow-xs hover:-translate-y-2 hover:border-[#5B4FBE] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center mb-6">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">End-to-End Encryption</h3>
                  <p className="text-[#1A1A2E]/70 text-xs sm:text-sm leading-relaxed mb-6">
                    Every connection between you and Couponscrew is encrypted with 256-bit SSL. The same standard banks use. Your data does not travel in the open.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setOpenSection(5)}
                    className="text-[#5B4FBE] font-semibold text-xs inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 2 - Zero Data Selling */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-8 shadow-xs hover:-translate-y-2 hover:border-[#22C55E] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F0FDF4] text-[#22C55E] flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">Zero Data Sold - Ever</h3>
                  <p className="text-[#1A1A2E]/70 text-xs sm:text-sm leading-relaxed mb-6">
                    We earn through CPS affiliate commissions when you buy via our links. That model means we have zero incentive to sell your data - and we never have.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setOpenSection(3)}
                    className="text-[#22C55E] font-semibold text-xs inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>Read Policy Guarantee</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 3 - Your Data, Your Control */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-8 shadow-xs hover:-translate-y-2 hover:border-[#FF5722] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF3F0] text-[#FF5722] flex items-center justify-center mb-6">
                    <User className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">Your Data, Your Control</h3>
                  <p className="text-[#1A1A2E]/70 text-xs sm:text-sm leading-relaxed mb-6">
                    You can access, correct, download, or permanently delete your data at any time. Email privacy@couponscrew.com and we will handle it within 30 days.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setOpenSection(6)}
                    className="text-[#FF5722] font-semibold text-xs inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>Manage Data Choices</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - COMPLIANCE BADGES STRIP */}
        <section className="bg-[#F0EEFF] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-xl font-bold text-[#1A1A2E] mb-10">We Take Compliance Seriously</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "GDPR Compliant", desc: "Aligned with EU global data processing standards for all users.", icon: Globe, iconColor: "#3B82F6", label: "EU" },
                { title: "SSL Secured", desc: "256-bit SSL encryption on all data in transit, end to end.", icon: Lock, iconColor: "#10B981", label: "TLS" },
                { title: "ISO 27001", desc: "Information security management aligned with global standards.", icon: Shield, iconColor: "#8B5CF6", label: "ISO" },
                { title: "DPDP Act 2023", desc: "Fully aligned with India's Digital Personal Data Protection Act.", icon: Gavel, iconColor: "#FF5722", label: "IND" }
              ].map((badge, index) => {
                const BadgeIcon = badge.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-[#E8E8F0] shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-3 right-3 text-[10px] font-extrabold text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full select-none uppercase">
                      {badge.label}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <BadgeIcon className="w-5 h-5" style={{ color: badge.iconColor }} />
                    </div>
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-1">{badge.title}</h3>
                    <p className="text-xs text-[#4A4A6A] leading-relaxed">{badge.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 7 - BOTTOM CTA BANNER */}
        <section className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] py-16 relative overflow-hidden text-center">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-[#FF5722] opacity-10 pointer-events-none"></div>
          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white opacity-5 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
            <Shield className="w-12 h-12 text-[#FFD700] mx-auto filter drop-shadow-md" />

            <div className="space-y-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Your Privacy Is Our Priority</h2>
              <p className="text-3xl font-bold text-[#FF5722]">We&apos;re committed to protecting your data</p>
            </div>

            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
              Couponscrew runs on trust. Every deal we verify, every expired code we remove, every data request we honour - it all comes back to the same thing: we want you to come back tomorrow. That only happens if we earn it.
            </p>

            <div className="flex justify-center gap-4 flex-wrap mt-8 select-none">
              <div className="bg-white/10 border border-white/20 text-white text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                <span>No Data Selling</span>
              </div>
              <div className="bg-white/10 border border-white/20 text-white text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                <span>Always Encrypted</span>
              </div>
              <div className="bg-white/10 border border-white/20 text-white text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                <span>You&apos;re In Control</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 flex-wrap mt-10">
              <button
                onClick={() => {
                  window.location.href = "/";
                }}
                className="bg-[#FF5722] text-white px-10 py-4 rounded-full font-bold text-base hover:bg-orange-500 transition shadow-lg shadow-orange-500/30 flex items-center gap-2 cursor-pointer"
              >
                <Star className="w-5 h-5 fill-white" />
                <span>View Our Coupons</span>
              </button>
              <a
                href="mailto:privacy@couponscrew.com"
                className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-white/10 transition flex items-center gap-2 cursor-pointer inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Privacy Team</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
