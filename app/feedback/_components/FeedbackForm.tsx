'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Star,
  Globe,
  FileText,
  User,
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Home,
  Search,
  ArrowRight,
  Edit3,
  Users,
  MessageCircle,
  CircleDollarSign,
  Megaphone,
  X
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

type FormState = {
  rating: number;
  message: string;
  name: string;
  email: string;
};

const INITIAL: FormState = {
  rating: 0,
  message: '',
  name: '',
  email: '',
};

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const TrustpilotIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0l3.7 7.5L24 8.7l-6 5.8 1.4 8.3L12 18.9l-7.4 3.9 1.4-8.3-6-5.8 8.3-1.2z" fill="#00b67a" />
  </svg>
);

const CouponsCrewIcon = () => (
  <div className="flex gap-0.5 items-center justify-center w-5 h-5">
    <div className="w-2.5 h-2.5 rounded-full bg-[#5B4FBE]" />
    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5E20]" />
  </div>
);

const FiveStars = ({ size = 4, className = "text-amber-400" }: { size?: number, className?: string }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className={`w-${size} h-${size} fill-current ${className}`} />
    ))}
  </div>
);

const ReviewCard = ({ letter, letterBg, img, name, date, text, source }: any) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {img ? (
            <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${letterBg}`}>
              {letter}
            </div>
          )}
          <div>
            <div className="font-bold text-slate-900 text-sm">{name}</div>
            <div className="text-xs text-slate-500">{date}</div>
          </div>
        </div>
      </div>

      <div className="mb-3 text-amber-400 flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>

      <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
        {text}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
          {source === 'Google' && <GoogleIcon />}
          {source === 'Trustpilot' && <TrustpilotIcon />}
          {source === 'CouponsCrew' && <CouponsCrewIcon />}
          {source} Review
        </div>
        <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-green-700 bg-green-50 px-2 py-1 rounded-full">
          <CheckCircle className="w-3 h-3 text-green-500" /> Verified Purchase
        </div>
      </div>
    </div>
  );
};

export default function FeedbackForm() {
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const setFormKey = (key: keyof FormState, val: FormState[keyof FormState]) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!form.name.trim()) { setError('Your name is required.'); return; }
    if (!form.email.trim()) { setError('Your email address is required.'); return; }
    if (!form.rating) { setError('Please rate your experience.'); return; }
    if (!form.message.trim()) { setError('Please tell us more in the message field.'); return; }

    setError('');
    setSubmitting(true);

    try {
      // Assuming api can handle fewer fields or defaults them
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: 'General Feedback',
          rating: form.rating,
          pageUrl: '',
          message: form.message,
          name: form.name,
          email: form.email,
          canContact: true,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Submission failed');

      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const active = hoverRating || form.rating;
  const starLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

  return (
    <>
      <Navbar />

      {/* ── Modal Popup for Writing Review ─────────────────────────────────── */}
      {isWritingReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsWritingReview(false)} />

          <div className="relative bg-white w-full max-w-lg rounded-3xl p-6 md:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsWritingReview(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {success ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Feedback Sent! 🎉</h2>
                <p className="text-slate-600 mb-6">
                  Thank you for sharing your experience. We read every single feedback.
                </p>
                <button
                  onClick={() => { setSuccess(false); setIsWritingReview(false); }}
                  className="w-full py-3 rounded-xl bg-[#5B4FBE] text-white font-semibold hover:bg-[#4D43A8] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Write a Review</h2>
                <p className="text-slate-500 text-sm mb-6">Share your experience with CouponsCrew.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="feedback-name" className="text-sm font-semibold text-slate-900">Name <span className="text-red-500">*</span></label>
                    <input
                      id="feedback-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setFormKey('name', e.target.value)}
                      placeholder="Your Name"
                      className="w-full bg-[#F8F8FF] border border-gray-200 focus:border-[#5B4FBE] focus:ring-1 focus:ring-[#5B4FBE] rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="feedback-email" className="text-sm font-semibold text-slate-900">Email <span className="text-red-500">*</span></label>
                    <input
                      id="feedback-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setFormKey('email', e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-[#F8F8FF] border border-gray-200 focus:border-[#5B4FBE] focus:ring-1 focus:ring-[#5B4FBE] rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-900">How would you rate your experience? <span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormKey('rating', star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 transition-transform hover:scale-110 active:scale-95"
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${star <= active
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-transparent text-gray-300 hover:text-amber-300'
                              }`}
                          />
                        </button>
                      ))}
                      {active > 0 && <span className="ml-2 text-sm font-medium text-amber-500">{starLabels[active]}</span>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="feedback-message" className="text-sm font-semibold text-slate-900">Write about us <span className="text-red-500">*</span></label>
                    <textarea
                      id="feedback-message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setFormKey('message', e.target.value)}
                      placeholder="Tell us what you loved or how we can improve..."
                      className="w-full bg-[#F8F8FF] border border-gray-200 focus:border-[#5B4FBE] focus:ring-1 focus:ring-[#5B4FBE] rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#5B4FBE] to-[#7C3AED] hover:from-[#4D43A8] hover:to-[#6B2FD0] text-white font-bold text-base transition-all shadow-lg shadow-[#5B4FBE]/25 flex items-center justify-center gap-2"
                  >
                    {submitting ? 'Sending...' : <><Send className="w-4 h-4" /> Submit Review</>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Main Page Content ─────────────────────────────────────────────── */}
      <div className="min-h-screen bg-[#FAFAFA] font-sans pb-10">
        <div className="relative pt-16 pb-12 overflow-hidden text-center bg-gradient-to-b from-blue-50/50 to-[#FAFAFA]">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Customer Reviews & <span className="text-[#FF5E20]">Feedback</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg mb-10 px-4">
            See what thousands of shoppers say about CouponsCrew.<br className="hidden md:block" />
            Your feedback helps us improve and keeps our coupons updated and reliable.
          </p>

          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <GoogleIcon />
                <span className="font-bold text-lg text-slate-800">Google Reviews</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-extrabold text-slate-900">4.9</span>
                <div className="flex gap-0.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-6">2,540+ Reviews</p>
              <button className="w-full py-3 rounded-xl bg-orange-50 text-[#FF5E20] hover:bg-[#FF5E20] hover:text-white font-semibold flex items-center justify-center gap-2 transition-colors border border-[#FF5E20]/20 hover:border-transparent mt-auto">
                View Google Reviews <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <TrustpilotIcon />
                <span className="font-bold text-lg text-slate-800">Trustpilot Reviews</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-extrabold text-slate-900">4.8</span>
                <div className="flex gap-0.5 text-amber-400">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-6">1,320+ Reviews</p>
              <a href="https://www.trustpilot.com/evaluate/couponscrew.com" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-purple-50 text-[#5B4FBE] hover:bg-[#5B4FBE] hover:text-white font-semibold flex items-center justify-center gap-2 transition-colors border border-[#5B4FBE]/20 hover:border-transparent mt-auto">
                View Trustpilot Reviews <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-50 text-[#5B4FBE] rounded-full flex items-center justify-center mb-4">
                  <Edit3 className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg text-slate-800 mb-2">Write a Review</span>
                <p className="text-sm text-slate-500 text-center mb-6 px-4">
                  Share your experience<br />and help other shoppers.
                </p>
              </div>
              <button
                onClick={() => setIsWritingReview(true)}
                className="w-full py-3 rounded-xl bg-[#FF5E20] text-white hover:bg-[#E04D15] font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#FF5E20]/20 mt-auto"
              >
                Write a Review <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">

            <div className="flex items-center gap-4 px-4 w-full md:w-auto pt-4 md:pt-0 first:pt-0">
              <div className="w-14 h-14 bg-purple-50 text-[#5B4FBE] rounded-2xl flex items-center justify-center shrink-0">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-800">50,000+</div>
                <div className="text-sm text-slate-500">Happy Users</div>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 w-full md:w-auto pt-4 md:pt-0">
              <div className="w-14 h-14 bg-purple-50 text-[#5B4FBE] rounded-2xl flex items-center justify-center shrink-0">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-800">5,000+</div>
                <div className="text-sm text-slate-500">Reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 w-full md:w-auto pt-4 md:pt-0">
              <div className="w-14 h-14 bg-orange-50 text-[#FF5E20] rounded-2xl flex items-center justify-center shrink-0">
                <CircleDollarSign className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-800">₹2 Cr+</div>
                <div className="text-sm text-slate-500">Money Saved</div>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4 w-full md:w-auto pt-4 md:pt-0">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                <Star className="w-7 h-7 fill-current" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-800">4.8/5</div>
                <div className="text-sm text-slate-500">Average Rating</div>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 mb-20">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Latest <span className="text-[#FF5E20]">Reviews</span>
              </h2>
              <p className="text-slate-500 text-sm">
                Real reviews from Google, Trustpilot and our website users.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Search reviews..." className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B4FBE] focus:ring-1 focus:ring-[#5B4FBE] text-sm bg-white" />
              </div>
              <div className="relative">
                <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B4FBE] focus:ring-1 focus:ring-[#5B4FBE] text-sm font-medium text-slate-700 bg-white cursor-pointer">
                  <option>Newest First</option>
                  <option>Oldest First</option>
                  <option>Highest Rated</option>
                  <option>Lowest Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-8 border-b border-slate-200 mb-8 pb-1 scrollbar-hide">
            <button className="flex items-center gap-2 pb-3 font-semibold text-[#5B4FBE] border-b-2 border-[#FF5E20] whitespace-nowrap px-1">
              All Reviews (5,000+)
            </button>
            <button className="flex items-center gap-2 pb-3 font-medium text-slate-500 hover:text-slate-800 whitespace-nowrap px-1 transition-colors">
              <GoogleIcon /> Google Reviews (2,540)
            </button>
            <button className="flex items-center gap-2 pb-3 font-medium text-slate-500 hover:text-slate-800 whitespace-nowrap px-1 transition-colors">
              <TrustpilotIcon /> Trustpilot Reviews (1,320)
            </button>
            <button className="flex items-center gap-2 pb-3 font-medium text-slate-500 hover:text-slate-800 whitespace-nowrap px-1 transition-colors">
              <CouponsCrewIcon /> CouponsCrew Reviews (1,140)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

            <ReviewCard
              letter="R" letterBg="bg-purple-100 text-[#5B4FBE]"
              name="Rahul Sharma" date="2 days ago"
              text="CouponsCrew really helps me save money on online shopping. I recently used an Amazon coupon and saved ₹2,300. Great platform with genuine offers!"
              source="Google"
            />
            <ReviewCard
              img="https://i.pravatar.cc/150?img=5"
              name="Priya Mehta" date="5 days ago"
              text="I always check CouponsCrew before shopping online. The latest deals and coupon codes are always updated. Very helpful website!"
              source="Trustpilot"
            />
            <ReviewCard
              letter="A" letterBg="bg-orange-100 text-[#FF5E20]"
              name="Amit Verma" date="1 week ago"
              text="Found a great discount code for Flipkart. The code worked perfectly and saved me a lot. Thank you CouponsCrew!"
              source="CouponsCrew"
            />
            <ReviewCard
              img="https://i.pravatar.cc/150?img=11"
              name="Neha Kapoor" date="1 week ago"
              text="Amazing collection of offers and deals. I use this site for Myntra, Nykaa and Amazon. Highly recommended!"
              source="Google"
            />
            <ReviewCard
              letter="S" letterBg="bg-green-100 text-green-600"
              name="Sandeep Kumar" date="2 weeks ago"
              text="Trustpilot brought me here and I'm glad. CouponsCrew has genuine coupons and the website is easy to use."
              source="Trustpilot"
            />
            <ReviewCard
              img="https://i.pravatar.cc/150?img=12"
              name="Kavita Singh" date="2 weeks ago"
              text="Excellent platform for finding working coupon codes. Saved money on my recent Zepto order. Keep it up!"
              source="CouponsCrew"
            />

          </div>

          <div className="flex justify-center">
            <button className="px-6 py-3 rounded-full border border-slate-300 text-[#5B4FBE] font-semibold hover:border-[#5B4FBE] hover:bg-purple-50 transition-colors flex items-center gap-2 text-sm bg-white">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Load More Reviews
            </button>
          </div>

        </div>

        <div className="max-w-6xl mx-auto px-4 mb-10">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFF5F0] to-[#FFE8DE] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-[#FF5E20]/10">

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 text-center md:text-left">
              <div className="w-24 h-24 shrink-0">
                <div className="w-full h-full rounded-full bg-white/60 flex items-center justify-center transform -rotate-12 shadow-sm">
                  <Megaphone className="w-12 h-12 text-[#FF5E20] fill-current opacity-80" />
                </div>
              </div>
              <div>
                <div className="text-[#FF5E20] font-bold text-sm tracking-wider uppercase mb-1">Love Couponscrew?</div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                  Share Your <span className="text-[#FF5E20]">Experience</span>
                </h3>
                <p className="text-slate-600 max-w-md text-sm md:text-base">
                  Help other shoppers by writing a review. Your feedback keeps our coupons updated and reliable.
                </p>
              </div>
            </div>

            <div className="mt-8 md:mt-0 relative z-10 shrink-0">
              <button
                onClick={() => setIsWritingReview(true)}
                className="px-8 py-4 rounded-xl bg-[#FF5E20] text-white hover:bg-[#E04D15] font-bold flex items-center justify-center gap-2 transition-colors shadow-xl shadow-[#FF5E20]/30 text-lg"
              >
                Write a Review <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="absolute right-10 bottom-10 opacity-20">
              <Star className="w-16 h-16 text-[#FF5E20] fill-current transform rotate-12" />
            </div>
            <div className="absolute left-1/2 top-4 opacity-10">
              <div className="w-32 h-32 rounded-full bg-[#FF5E20] blur-3xl" />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
