'use client';

import React, { useState } from 'react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones as HeadphonesIcon,
  CheckCircle,
  ArrowRight,
  Globe,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  Users,
  Star
} from 'lucide-react';

// Declarative interfaces
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ContactInfo {
  icon: any;
  title: string;
  value: string;
  sub: string;
  color: string;
  bg: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contactInfoList: ContactInfo[] = [
    {
      icon: Mail,
      color: "#5B4FBE",
      bg: "#F0EEFF",
      title: "Email Us",
      value: "support@couponscrew.com",
      sub: "We reply within 2 hours"
    },
    {
      icon: Phone,
      color: "#FF5722",
      bg: "#FFF3F0",
      title: "Call Us",
      value: "+91 98765 43210",
      sub: "Mon-Sat, 9AM to 7PM"
    },
    {
      icon: MapPin,
      color: "#22C55E",
      bg: "#F0FDF4",
      title: "Visit Us",
      value: "Bengaluru, Karnataka",
      sub: "India 560001"
    },
    {
      icon: Clock,
      color: "#F59E0B",
      bg: "#FFFBEB",
      title: "Working Hours",
      value: "7 Days a Week",
      sub: "9:00 AM - 9:00 PM IST"
    }
  ];

  const faqData: FAQItem[] = [
    {
      question: "How do I use a coupon code from Couponscrew?",
      answer: "Find the deal you want, click 'Get Code' to reveal it, copy the code, and paste it at checkout on the brand's website. That's it. If the code is case-sensitive, we'll mention it on the listing."
    },
    {
      question: "Are all coupons on Couponscrew verified?",
      answer: "Yes. Every code on the platform is manually tested before it goes live — a standard most coupon websites skip entirely. Our current success rate is 92.4% - which means when you grab a code from us, it almost certainly works. The ones that stop working get removed fast."
    },
    {
      question: "Why is my coupon code not working?",
      answer: "Most code failures come down to brand-side restrictions - minimum order value, specific categories, or single-use limits. Check the terms listed under the code first. If it still fails and it looks valid, contact us via the form and we will sort it within 2 hours."
    },
    {
      question: "How can I submit a coupon to Couponscrew?",
      answer: "Use the contact form above and select 'Submit a Coupon' as the category. Share the code, the brand, and any terms you know. We'll verify it and add it to the platform — the only discount code website that manually checks every submission — if it's live."
    },
    {
      question: "Is Couponscrew free to use?",
      answer: "Completely free. Unlike other coupon websites, we never charge users anything. The platform runs on affiliate commissions - when you click a deal and buy through our link, the brand pays us a small commission. You pay the same price either way. That's the whole model."
    },
    {
      question: "How often are new coupons added?",
      answer: "Every day. The team actively tracks sales, brand launches, and limited-time codes across 500+ brands. If something new drops, it goes on the platform the same day."
    },
    {
      question: "Can I advertise my brand on Couponscrew?",
      answer: "Yes. Select 'Brand Partnership' or 'Advertise With Us' in the contact form above. Our partnerships team will come back to you within 24 hours with options."
    },
    {
      question: "How do I report an expired or incorrect coupon?",
      answer: "Use the contact form, pick 'Coupon Not Working', and include the brand name and the code. We'll pull it or fix it immediately. Keeping the listings clean is the whole point — it's what separates the best coupon sites from the ones that list dead codes."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 1 - HERO BANNER */}
        <section className="bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] min-h-[420px] flex items-center relative overflow-hidden py-16">
          {/* Decorative shapes */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white opacity-5 pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[#FF5722] opacity-10 pointer-events-none"></div>

          {/* Dots grid */}
          <div className="absolute top-10 right-1/4 grid grid-cols-5 gap-2.5 pointer-events-none">
            {Array.from({ length: 25 }).map((_, idx) => (
              <div key={idx} className="w-1 h-1 bg-white opacity-20 rounded-full"></div>
            ))}
          </div>

          {/* Animated ping dot */}
          <div className="absolute top-20 left-1/4 w-3.5 h-3.5 rounded-full bg-[#FF5722] animate-ping opacity-60 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 w-full text-center relative z-10">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-5 py-2 rounded-full inline-flex items-center gap-2 select-none">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>REAL PEOPLE. REAL REPLIES.</span>
            </span>

            <h1 className="font-bold text-5xl md:text-6xl text-white mt-6 leading-tight">
              Get In <span className="text-[#FF5722]">Touch</span>
            </h1>
            <h2 className="font-bold text-5xl md:text-6xl text-white mt-2">
              With Couponscrew
            </h2>

            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mt-6">
              Got a code that won&apos;t work? A deal you want us to add? Or just want to say hi? We read every message and reply within 2 hours.
            </p>

            <div className="flex justify-center gap-6 flex-wrap mt-10">
              {[
                { number: "< 2 Hours", label: "Avg Response Time" },
                { number: "24/7", label: "Support Available" },
                { number: "92.4%", label: "Coupon Success Rate" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 border border-white/20 rounded-full px-6 py-3 text-center min-w-[170px] backdrop-blur-xs">
                  <p className="text-xl font-black text-white">{stat.number}</p>
                  <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 - CONTACT INFO CARDS ROW */}
        <section className="bg-white py-12 relative z-10 -mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto px-6">
            {contactInfoList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E8E8F0] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
                  <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: item.bg }}>
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-4">
                    {item.title}
                  </h3>
                  <p className="text-base font-bold text-[#1A1A2E] mt-1">
                    {item.value}
                  </p>
                  <p className="text-xs text-[#4A4A6A] mt-1">
                    {item.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3 - MAIN CONTACT FORM + SIDEBAR */}
        <section className="bg-[#F8F8FF] py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-10 gap-10">
            {/* LEFT - CONTACT FORM (60%) */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-[#E8E8F0] shadow-xl p-8 md:p-10">
                {!isSubmitted ? (
                  <>
                    <div className="border-b border-[#E8E8F0] pb-6">
                      <h2 className="text-2xl font-bold text-[#1A1A2E]">Send Us a Message</h2>
                      <p className="text-sm text-[#4A4A6A] mt-1">
                        Drop us a message. We reply within 2 hours - no ticket queues, no bots.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5 mt-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-[#1A1A2E]">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full border border-[#E8E8F0] rounded-xl px-4 py-3.5 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#5B4FBE] focus:ring-2 focus:ring-[#5B4FBE]/10 transition"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-[#1A1A2E]">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full border border-[#E8E8F0] rounded-xl px-4 py-3.5 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#5B4FBE] focus:ring-2 focus:ring-[#5B4FBE]/10 transition"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-[#1A1A2E]">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full border border-[#E8E8F0] rounded-xl px-4 py-3.5 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#5B4FBE] focus:ring-2 focus:ring-[#5B4FBE]/10 transition"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-[#1A1A2E]">Query Category *</label>
                          <div className="relative">
                            <select
                              required
                              value={formData.category}
                              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                              className="w-full border border-[#E8E8F0] bg-white rounded-xl px-4 py-3.5 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#5B4FBE] focus:ring-2 focus:ring-[#5B4FBE]/10 transition appearance-none"
                            >
                              <option value="">Select a category</option>
                              <option value="Coupon Not Working">Coupon Not Working</option>
                              <option value="Submit a Coupon">Submit a Coupon</option>
                              <option value="Brand Partnership">Brand Partnership</option>
                              <option value="Technical Issue">Technical Issue</option>
                              <option value="General Inquiry">General Inquiry</option>
                              <option value="Advertise With Us">Advertise With Us</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#1A1A2E]">Subject *</label>
                        <input
                          type="text"
                          required
                          placeholder="Brief subject of your message"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full border border-[#E8E8F0] rounded-xl px-4 py-3.5 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#5B4FBE] focus:ring-2 focus:ring-[#5B4FBE]/10 transition"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#1A1A2E]">Message *</label>
                        <textarea
                          rows={5}
                          required
                          placeholder="Describe your query in detail..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full border border-[#E8E8F0] rounded-xl px-4 py-3.5 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#5B4FBE] focus:ring-2 focus:ring-[#5B4FBE]/10 transition resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="mt-6 w-full bg-gradient-to-r from-[#5B4FBE] to-[#7C3AED] text-white py-4 rounded-xl font-bold text-base hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 cursor-pointer"
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-10 px-4 space-y-6">
                    <CheckCircle className="w-16 h-16 text-[#22C55E] mx-auto filter drop-shadow-md" />
                    <div>
                      <h3 className="text-2xl font-bold text-[#1A1A2E]">Got it. We&apos;ll be back within 2 hours.</h3>
                      <p className="text-[#4A4A6A] text-sm mt-2 max-w-md mx-auto">
                        Someone on the team will read your message and reply. Real person, real reply.
                      </p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="inline-flex border-2 border-[#5B4FBE] text-[#5B4FBE] hover:bg-[#F0EEFF] px-8 py-3 rounded-xl font-bold text-sm transition cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT - SIDEBAR (40%) */}
            <div className="lg:col-span-4 space-y-5">
              {/* CARD 1 - Quick Support Options */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-sm">
                <h3 className="font-bold text-[#1A1A2E] text-base">Quick Support</h3>
                <div className="space-y-3 mt-4">
                  {[
                    { icon: HeadphonesIcon, color: "#5B4FBE", bg: "#F0EEFF", title: "Live Chat Support", sub: "Talk to the team live" },
                    { icon: Mail, color: "#FF5722", bg: "#FFF3F0", title: "Email Support", sub: "support@couponscrew.com" },
                    { icon: Phone, color: "#22C55E", bg: "#F0FDF4", title: "Phone Support", sub: "+91 98765 43210" }
                  ].map((elem, idx) => {
                    const SideIcon = elem.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F0EEFF] cursor-pointer transition group">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: elem.bg }}>
                          <SideIcon className="w-5 h-5" style={{ color: elem.color }} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#1A1A2E]">{elem.title}</p>
                          <p className="text-xs text-[#4A4A6A]">{elem.sub}</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 ml-auto group-hover:text-[#5B4FBE] transition-transform group-hover:translate-x-1" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CARD 2 - Connect on Social */}
              <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-2xl p-6">
                <h3 className="text-white font-bold text-base">Follow Us</h3>
                <p className="text-white/70 text-xs mt-1">We post verified deals before they expire. Follow to catch them first.</p>
                <div className="grid grid-cols-2 gap-3 mt-5">
                  {[
                    { icon: Instagram, label: "Instagram", bg: "bg-pink-500/95" },
                    { icon: Facebook, label: "Facebook", bg: "bg-blue-600/95" },
                    { icon: Twitter, label: "Twitter/X", bg: "bg-sky-500/95" },
                    { icon: Youtube, label: "YouTube", bg: "bg-red-600/95" }
                  ].map((soc, idx) => {
                    const SocIcon = soc.icon;
                    return (
                      <a
                        href="#"
                        key={idx}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-xs font-semibold cursor-pointer hover:opacity-90 transition ${soc.bg}`}
                      >
                        <SocIcon className="w-4 h-4 shrink-0" />
                        <span>{soc.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* CARD 3 - Office Location Map Placeholder */}
              <div className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden shadow-sm">
                <div className="bg-gradient-to-br from-[#F0EEFF] to-[#E8E4FF] h-36 flex flex-col items-center justify-center relative select-none">
                  <MapPin className="w-10 h-10 text-[#5B4FBE] opacity-45 animate-bounce" />
                  <p className="text-sm font-semibold text-[#5B4FBE] mt-2">Bengaluru, Karnataka</p>
                  <p className="text-[10px] text-gray-400 font-mono tracking-wider font-semibold uppercase mt-0.5">Google Maps Interactive Area</p>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-[#1A1A2E]">Our Office</h4>
                  <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">
                    Bengaluru, Karnataka - 560001
                  </p>
                  <p className="text-xs text-[#5B4FBE] font-bold mt-3 cursor-pointer hover:underline inline-block">
                    Get Directions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 - FAQ SECTION */}
        <section className="bg-white py-20 border-t border-[#E8E8F0]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-[#5B4FBE] uppercase bg-[#F0EEFF] px-3.5 py-1.5 rounded-md inline-block select-none">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mt-4">Frequently Asked Questions</h2>
              <p className="text-[#4A4A6A] text-base mt-2">
                Can&apos;t find what you&apos;re looking for? Use the form above and we&apos;ll reply within 2 hours.
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-[#E8E8F0] rounded-2xl overflow-hidden hover:border-[#5B4FBE] transition-colors duration-300 bg-white"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#F8F8FF] transition cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-[#1A1A2E] flex-1 pr-4">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#5B4FBE] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#5B4FBE] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 bg-white">
                        <div className="border-t border-[#E8E8F0] pt-4 text-sm text-[#4A4A6A] leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5 - BOTTOM CTA STRIP */}
        <section className="bg-gradient-to-r from-[#FF5722] to-[#FF8A50] py-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white opacity-10 pointer-events-none"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-white opacity-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between flex-wrap gap-6 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white">Still have questions?</h3>
              <p className="text-white/80 text-sm mt-1">We reply within 2 hours. Faster on most days.</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-[#FF5722] hover:bg-gray-50 px-8 py-3.5 rounded-full font-bold text-sm transition flex items-center gap-2 cursor-pointer shadow-md">
                <MessageSquare className="w-4 h-4" />
                <span>Start Live Chat</span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold text-sm transition flex items-center gap-2 cursor-pointer">
                <Phone className="w-4 h-4" />
                <span>Call Us Now</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
