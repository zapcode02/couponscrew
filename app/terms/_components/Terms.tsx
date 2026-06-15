'use client';

import React, { useState } from 'react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import {
  FileText, Shield, AlertTriangle, CheckCircle,
  XCircle, Globe, Lock, RefreshCw, Mail, Phone,
  ChevronDown, ChevronUp, Scale, Eye, Cookie,
  CreditCard, UserX, Ban, ArrowRight, Info,
  BookOpen, Gavel, Clock, Star
} from 'lucide-react';

// TypeScript interfaces
interface TermsSection {
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

export default function Terms() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const tableOfContents: TableOfContents[] = [
    { id: 1, title: "Acceptance of Terms", icon: CheckCircle },
    { id: 2, title: "Use of Platform", icon: Globe },
    { id: 3, title: "User Accounts", icon: UserX },
    { id: 4, title: "Coupon Usage Policy", icon: Star },
    { id: 5, title: "Intellectual Property", icon: BookOpen },
    { id: 6, title: "Privacy & Data", icon: Eye },
    { id: 7, title: "Cookies Policy", icon: Cookie },
    { id: 8, title: "Payment Terms", icon: CreditCard },
    { id: 9, title: "Prohibited Activities", icon: Ban },
    { id: 10, title: "Disclaimers", icon: AlertTriangle },
    { id: 11, title: "Governing Law", icon: Gavel },
    { id: 12, title: "Contact & Updates", icon: RefreshCw },
  ];

  const termsSections: TermsSection[] = [
    {
      id: 1,
      icon: CheckCircle,
      iconColor: "#22C55E",
      iconBg: "#F0FDF4",
      title: "1. Acceptance of Terms",
      lastUpdated: "January 2025",
      summary: "Use Couponscrew, agree to these terms. Simple as that.",
      points: [
        "By accessing or using Couponscrew (couponscrew.com), you confirm that you are at least 18 years of age or have parental consent to use this platform.",
        "Your continued use of Couponscrew means you accept these Terms & Conditions, including any future updates we make.",
        "If you disagree with any part of these terms, stop using the platform. No hard feelings.",
        "These terms apply to all visitors, registered users, and anyone who accesses our services in any capacity.",
        "Couponscrew reserves the right to update or modify these Terms at our sole discretion. We will notify users of significant changes.",
      ]
    },
    {
      id: 2,
      icon: Globe,
      iconColor: "#5B4FBE",
      iconBg: "#F0EEFF",
      title: "2. Use of Platform",
      lastUpdated: "January 2025",
      summary: "How you can and cannot use the platform.",
      points: [
        "Couponscrew — one of the best websites for couponing — grants you a limited, non-exclusive, non-transferable license to use our platform for personal, non-commercial purposes only.",
        "You agree not to use our platform for anything unlawful, or in any way that could damage or impair the service.",
        "Automated scraping, crawling, or data extraction from Couponscrew without written permission is strictly prohibited.",
        "Do not use our platform to transmit spam, malware, or any content that is harmful, offensive, or illegal.",
        "We reserve the right to restrict or terminate your access at any time if we detect misuse or violation of these terms.",
        "All coupon codes and deals are for personal use only - reselling or bulk distribution is not permitted.",
      ]
    },
    {
      id: 3,
      icon: UserX,
      iconColor: "#FF5722",
      iconBg: "#FFF3F0",
      title: "3. User Accounts",
      lastUpdated: "January 2025",
      summary: "Your account, your responsibility.",
      points: [
        "When you create an account with Couponscrew, provide accurate and current information. Fake details help no one.",
        "You are responsible for keeping your account credentials confidential and for everything that happens under your account.",
        "If you spot any unauthorised use of your account, email us immediately at support@couponscrew.com.",
        "Couponscrew cannot be held liable for loss or damage resulting from your failure to keep your account secure.",
        "We reserve the right to suspend or terminate accounts at our discretion - we will always have a valid reason for doing so.",
        "One person, one account. Duplicate accounts will be suspended without warning.",
      ]
    },
    {
      id: 4,
      icon: Star,
      iconColor: "#F59E0B",
      iconBg: "#FFFBEB",
      title: "4. Coupon Usage Policy",
      lastUpdated: "January 2025",
      summary: "How coupons work here and what we verify.",
      points: [
        "All coupon codes listed on Couponscrew — one of the best coupon sites for online shopping — are sourced directly from brand partners or publicly available promotional campaigns.",
        "We manually verify every coupon before publishing. Our current success rate sits at 92.4% - higher than most platforms because we actually check.",
        "Coupon validity, minimum order requirements, and category restrictions are set by the brand, not by us. We display them clearly.",
        "Couponscrew is not responsible for changes brands make to their coupon terms, expiry dates, or discount values after we publish.",
        "Using coupons for fraudulent transactions or to bypass brand policies is a violation of these terms and will result in account suspension.",
        "We remove expired coupons as quickly as possible. If you find a dead code, report it - we will fix it fast.",
      ]
    },
    {
      id: 5,
      icon: BookOpen,
      iconColor: "#8B5CF6",
      iconBg: "#F5F3FF",
      title: "5. Intellectual Property",
      lastUpdated: "January 2025",
      summary: "Our name and content are ours. Brand logos belong to their owners.",
      points: [
        "The Couponscrew name, logo, website design, content, and all associated intellectual property are owned exclusively by Couponscrew.",
        "All brand logos, trademarks, and names displayed on our platform belong to their respective owners and are used for informational purposes only.",
        "You may not copy, reproduce, or distribute any content from Couponscrew without explicit written permission.",
        "Unauthorised use of our intellectual property may result in legal action under applicable Indian and international IP laws.",
        "User-submitted content such as coupon tips or submissions grants Couponscrew a non-exclusive license to use and display that content.",
      ]
    },
    {
      id: 6,
      icon: Eye,
      iconColor: "#0EA5E9",
      iconBg: "#F0F9FF",
      title: "6. Privacy & Data",
      lastUpdated: "January 2025",
      summary: "We collect what we need. We never sell it.",
      points: [
        "Your privacy matters. Read our Privacy Policy for full details on how we collect and handle your data.",
        "We collect only the information necessary to run and improve the platform. We do not sell your personal data to third parties.",
        "By using Couponscrew, you consent to data collection and processing as described in our Privacy Policy.",
        "We use industry-standard security to protect your personal information from unauthorised access.",
        "You have the right to request access to, correction of, or deletion of your personal data at any time. Email us and we will sort it.",
        "We may share anonymised, aggregated data with partners for analytics. This data cannot be used to identify you.",
      ]
    },
    {
      id: 7,
      icon: Cookie,
      iconColor: "#F59E0B",
      iconBg: "#FFFBEB",
      title: "7. Cookies Policy",
      lastUpdated: "January 2025",
      summary: "We use cookies to make the platform work better.",
      points: [
        "Couponscrew uses cookies and similar technologies to improve your browsing experience and understand how people use the platform.",
        "Essential cookies are required for the platform to function. Disabling them will break parts of the experience.",
        "Analytics cookies help us see what is working and what is not, so we can keep improving the platform.",
        "Marketing cookies help us show relevant content and measure how effective our campaigns are.",
        "You can manage cookie preferences through your browser settings at any time, though some features may stop working if you do.",
        "By continuing to use Couponscrew, you agree to our use of cookies as described here and in our Privacy Policy.",
      ]
    },
    {
      id: 8,
      icon: CreditCard,
      iconColor: "#22C55E",
      iconBg: "#F0FDF4",
      title: "8. Payment Terms",
      lastUpdated: "January 2025",
      summary: "Couponscrew is free. We earn affiliate commissions when you buy through our links.",
      points: [
        "Couponscrew is completely free to use. As one of the best websites for couponing, we do not charge users any fees for accessing deals or coupon codes.",
        "Our revenue model is CPS (Cost Per Sale) affiliate marketing. When you click a deal link and complete a purchase, we earn a commission from the brand.",
        "This means we only earn when you actually buy something. Our incentive is to show you deals that genuinely work.",
        "We are not involved in payment processing between you and any brand. All transactions happen directly on the brand platform.",
        "Couponscrew is not responsible for payment disputes, refunds, or transaction issues that occur on third-party websites.",
      ]
    },
    {
      id: 9,
      icon: Ban,
      iconColor: "#EF4444",
      iconBg: "#FEF2F2",
      title: "9. Prohibited Activities",
      lastUpdated: "January 2025",
      summary: "Don&apos;t abuse the platform. Don&apos;t try to game it.",
      points: [
        "Attempting to hack, breach, or compromise Couponscrew systems, databases, or servers is strictly prohibited.",
        "Posting false, misleading, or fraudulent coupon codes that could harm users or damage brand reputations is not allowed.",
        "Using bots, automated tools, or scripts to interact with our platform without written permission is forbidden.",
        "Impersonating Couponscrew, our team, or other users is a serious violation and will be acted on.",
        "Engaging in any activity that prevents other users from accessing and using the platform normally is prohibited.",
        "Attempting to reverse engineer, decompile, or extract the source code of our platform is not permitted.",
        "Any violation of these rules may result in immediate account termination and, where appropriate, legal action.",
      ]
    },
    {
      id: 10,
      icon: AlertTriangle,
      iconColor: "#FF5722",
      iconBg: "#FFF3F0",
      title: "10. Disclaimers & Limitations",
      lastUpdated: "January 2025",
      summary: "Codes may not always work - brands control that. We are upfront about it.",
      points: [
        "Couponscrew — like all best coupon code websites — provides coupon information on an as-is basis without warranties of any kind, express or implied.",
        "We do not guarantee that every coupon code will work. Brands can deactivate or change codes without notice - that is outside our control.",
        "Couponscrew shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of our platform.",
        "We are not responsible for the quality, safety, or legality of products or services offered by any third-party brand.",
        "Our total liability for any claim shall not exceed the amount you paid to Couponscrew in the preceding 12 months, which for free users is zero.",
        "Some jurisdictions do not allow limitation of liability. In those cases, our liability is limited to the maximum extent permitted by applicable law.",
      ]
    },
    {
      id: 11,
      icon: Gavel,
      iconColor: "#5B4FBE",
      iconBg: "#F0EEFF",
      title: "11. Governing Law",
      lastUpdated: "January 2025",
      summary: "Indian law, Bengaluru courts, arbitration first.",
      points: [
        "These Terms are governed by the laws of India, without regard to conflict of law principles.",
        "Any disputes arising from these terms or your use of Couponscrew are subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.",
        "Before any legal proceedings, both parties agree to attempt resolution through good-faith negotiation for 30 days.",
        "If negotiation fails, disputes will be resolved through binding arbitration under the Indian Arbitration and Conciliation Act, 1996.",
        "Arbitration will be conducted in English in Bengaluru. The arbitrator's decision is final and binding on both parties.",
      ]
    },
    {
      id: 12,
      icon: RefreshCw,
      iconColor: "#22C55E",
      iconBg: "#F0FDF4",
      title: "12. Updates & Contact",
      lastUpdated: "January 2025",
      summary: "Terms update occasionally. We will tell you when they do.",
      points: [
        "Couponscrew may update these Terms at any time. For significant changes, we will notify users via email or a platform notice.",
        "Continued use of the platform after any update means you accept the revised Terms.",
        "We recommend checking this page periodically - it will always show the date of the last update.",
        "For questions about these Terms, email our team at legal@couponscrew.com.",
        "For general support, email support@couponscrew.com - we reply within 2 hours, Monday to Saturday.",
        "We are a remote-first team. The fastest way to reach us is always email, not a phone queue.",
      ]
    },
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
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                <span>LEGAL INFORMATION</span>
              </span>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white block">
                Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF5722]">Conditions</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                We&apos;ve kept these terms as readable as possible. No legal theatre, no 47-page document. Just what applies to you and how we work.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <div className="bg-white/10 border border-white/20 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 select-none backdrop-blur-xs">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Last Updated: Jan 2025</span>
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 select-none backdrop-blur-xs">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>12 Sections Covered</span>
                </div>
                <div className="bg-white/10 border border-white/20 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 select-none backdrop-blur-xs">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>Applicable Across India</span>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap mt-8">
                <button className="bg-[#FF5722] text-white px-7 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:bg-orange-500 transition shadow-lg shadow-orange-500/30 cursor-pointer">
                  <FileText className="w-4.5 h-4.5" />
                  <span>Download PDF</span>
                </button>
                <button className="border-2 border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition flex items-center gap-2 cursor-pointer">
                  <Mail className="w-4.5 h-4.5" />
                  <span>Contact Legal Team</span>
                </button>
              </div>
            </div>

            {/* Right Column (45%) */}
            <div className="hidden md:col-span-5 md:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-7 shadow-2xl space-y-6">
                <div>
                  <Gavel className="w-10 h-10 text-[#FFD700] mx-auto filter drop-shadow-md" />
                  <h3 className="text-white font-bold text-lg text-center mt-3">Quick Summary</h3>
                </div>

                <div className="space-y-3 mt-5">
                  {[
                    "Free to use - no hidden charges, ever",
                    "92.4% of codes on the platform actually work",
                    "Your data is safe - we never sell it",
                    "Expired codes get removed fast",
                    "Real people on support, not a ticket queue"
                  ].map((pt, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-5 mt-6 flex items-start gap-2 text-white/50 text-xs text-center justify-center">
                  <Info className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                  <span>By using Couponscrew, you agree to these terms.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 - TABLE OF CONTENTS */}
        <section className="bg-white py-12 border-b border-[#E8E8F0]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8 border-b border-[#E8E8F0] pb-4">
              <h2 className="text-xl font-bold text-[#1A1A2E]">Table of Contents</h2>
              <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 select-none">
                <FileText className="w-3 h-3" />
                <span>12 Sections</span>
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {tableOfContents.map((toc) => {
                const TocIcon = toc.icon;
                return (
                  <div
                    key={toc.id}
                    onClick={() => setOpenSection(toc.id)}
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

        {/* SECTION 3 - MAIN ACCORDION TERMS */}
        <section className="bg-[#F8F8FF] py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-10 gap-10 items-start">

            {/* LEFT - ACCORDION SECTIONS (68% - lg:col-span-7 out of 10) */}
            <div className="lg:col-span-7">
              {termsSections.map((section) => {
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

            {/* RIGHT - STICKY SIDEBAR (32% - lg:col-span-3 out of 10) */}
            <div className="lg:col-span-3 sticky top-24 space-y-5">
              {/* CARD 1 - Progress Tracker */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm">
                <h4 className="text-sm font-bold text-[#1A1A2E]">Your Reading Progress</h4>
                <p className="text-xs text-gray-400 mt-1">Click sections to read</p>

                <div className="mt-4">
                  <div className="bg-gray-100 rounded-full h-2 w-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#5B4FBE] to-[#7C3AED] h-2 rounded-full transition-all duration-500"
                      style={{ width: openSection ? `${(openSection / 12) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>

                <p className="text-xs text-[#5B4FBE] font-semibold mt-2 text-right">
                  {openSection ? `Section ${openSection} of 12` : 'Not started'}
                </p>

                <div className="mt-5 space-y-2 border-t border-gray-100 pt-4">
                  {termsSections.slice(0, 6).map((sec) => (
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

              {/* CARD 2 - Key Highlights */}
              <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-2xl p-6 shadow-sm">
                <h4 className="text-white font-bold text-sm">Key Highlights</h4>
                <p className="text-white/60 text-xs mt-1">Most important points</p>

                <div className="mt-5 space-y-3">
                  {[
                    "Couponscrew is 100% free - no charges ever",
                    "We never sell your personal data",
                    "All coupons are manually verified",
                    "Governed by Indian law, Bengaluru courts",
                    "Terms updated January 2025"
                  ].map((high, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Star className="text-[#FFD700] fill-[#FFD700] w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <p className="text-white/80 text-xs leading-relaxed">{high}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CARD 3 - Need Help? */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm">
                <Scale className="text-[#5B4FBE] w-8 h-8 mx-auto" />
                <h4 className="text-base font-bold text-[#1A1A2E] text-center mt-3">Legal Questions?</h4>
                <p className="text-xs text-[#4A4A6A] text-center mt-2 leading-relaxed">
                  Our team is happy to clarify any part of these terms. No bots, no ticket queues.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-[#F0EEFF] rounded-xl select-none">
                    <Mail className="w-4 h-4 text-[#5B4FBE]" />
                    <span className="text-xs font-semibold text-[#5B4FBE]">legal@couponscrew.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#FFF3F0] rounded-xl select-none">
                    <Phone className="w-4 h-4 text-[#FF5722]" />
                    <span className="text-xs font-semibold text-[#FF5722]">+91 98765 43210</span>
                  </div>
                </div>

                <a
                  href="mailto:legal@couponscrew.com"
                  className="mt-4 w-full bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white py-3 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Legal Team</span>
                </a>
              </div>

              {/* CARD 4 - Last Updated Notice */}
              <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-[#F59E0B] w-4.5 h-4.5 mt-0.5 shrink-0 animate-pulse" />
                  <div>
                    <h5 className="text-xs font-bold text-[#1A1A2E]">Last Updated</h5>
                    <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">
                      January 15, 2025 - Next review scheduled for January 2026.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 4 - AGREEMENT BANNER */}
        <section className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] py-16 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-[#FF5722] opacity-10 pointer-events-none"></div>
          <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white opacity-5 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
            <Gavel className="w-12 h-12 text-[#FFD700] mx-auto filter drop-shadow-md" />

            <div className="space-y-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white">By Using Couponscrew, You Agree</h2>
              <p className="text-3xl font-bold text-[#FF5722]">To These Terms</p>
            </div>

            <p className="text-white/70 text-base leading-relaxed max-w-2xl mx-auto">
              These terms protect both of us. We&apos;ve written them plainly so you actually know what you&apos;re agreeing to. If something&apos;s unclear, email us - we&apos;re real people.
            </p>

            <div className="flex justify-center gap-4 flex-wrap mt-8 select-none">
              <div className="bg-white/10 border border-white/20 text-white text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                <span>Written in plain English</span>
              </div>
              <div className="bg-white/10 border border-white/20 text-white text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                <span>No hidden charges, ever</span>
              </div>
              <div className="bg-white/10 border border-white/20 text-white text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                <span>Real people behind it</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 flex-wrap mt-10">
              <button
                onClick={() => alert("Thanks for reading. You're using Couponscrew - now go find a deal.")}
                className="bg-[#FF5722] text-white px-10 py-4 rounded-full font-bold text-base hover:bg-orange-500 transition shadow-lg shadow-orange-500/30 flex items-center gap-2 cursor-pointer"
              >
                <CheckCircle className="w-5 h-5" />
                <span>I Understand & Agree</span>
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-base hover:bg-white/10 transition flex items-center gap-2 cursor-pointer">
                <Mail className="w-5 h-5" />
                <span>Contact Legal Team</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
