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
} from 'lucide-react';

const TOPICS = [
  'General Feedback',
  'Bug Report',
  'Coupon Not Working',
  'Suggestion / Feature Request',
  'Compliment',
  'Partnership / Business Enquiry',
  'Other',
];

type FormState = {
  topic: string;
  rating: number;
  pageUrl: string;
  message: string;
  name: string;
  email: string;
  canContact: boolean | null;
};

const INITIAL: FormState = {
  topic: '',
  rating: 0,
  pageUrl: '',
  message: '',
  name: '',
  email: '',
  canContact: null,
};

export default function FeedbackForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const set = (key: keyof FormState, val: FormState[keyof FormState]) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!form.topic) { setError('Please select a topic.'); return; }
    if (!form.rating) { setError('Please rate your experience.'); return; }
    if (!form.message.trim()) { setError('Please tell us more in the message field.'); return; }
    if (!form.name.trim()) { setError('Your name is required.'); return; }
    if (!form.email.trim()) { setError('Your email address is required.'); return; }
    if (form.canContact === null) { setError('Please answer whether we can contact you.'); return; }

    setError('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: form.topic,
          rating: form.rating,
          pageUrl: form.pageUrl,
          message: form.message,
          name: form.name,
          email: form.email,
          canContact: form.canContact,
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

  /* ── Success Screen ─────────────────────────────────────────────────── */
  if (success) {
    return (
      <main className="min-h-screen bg-[#F8F8FF] flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          {/* Glow ring */}
          <div className="relative inline-flex mb-8">
            <div className="absolute inset-0 rounded-full bg-[#5B4FBE] blur-2xl opacity-20 scale-150" />
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] flex items-center justify-center shadow-2xl shadow-[#5B4FBE]/30">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-3">Feedback Sent! 🎉</h2>
          <p className="text-[#4A4A6A] leading-relaxed mb-2">
            Thank you for sharing your thoughts with us. A confirmation email has been sent to{' '}
            <span className="text-[#5B4FBE] font-semibold">{form.email}</span>.
          </p>
          <p className="text-gray-500 text-sm mb-10">Our team reads every single feedback — your input truly matters.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5B4FBE] hover:bg-[#4D43A8] text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#5B4FBE]/25"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <button
              onClick={() => { setSuccess(false); setForm(INITIAL); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 hover:border-[#5B4FBE] text-[#4A4A6A] hover:text-[#5B4FBE] font-semibold text-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer bg-white"
            >
              Submit Another
            </button>
          </div>
        </div>
      </main>
    );
  }

  /* ── Star helper ─────────────────────────────────────────────────────── */
  const active = hoverRating || form.rating;
  const starLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

  /* ── Main Form ───────────────────────────────────────────────────────── */
  return (
    <main className="min-h-screen bg-[#F8F8FF] pt-10 pb-20 px-4">

      {/* Soft top accent */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5B4FBE] via-[#7C3AED] to-[#5B4FBE] -z-10" />

      {/* Subtle ambient blobs — very light on white */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-8%] right-[-4%] w-96 h-96 rounded-full bg-[#5B4FBE]/6 blur-[120px]" />
        <div className="absolute bottom-[-4%] left-[-4%] w-80 h-80 rounded-full bg-[#7C3AED]/5 blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto">

        {/* ── Page Header ──────────────────────────────────────────────── */}
        <div className="text-center mb-10">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#5B4FBE] font-medium">Feedback</span>
          </nav>

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] shadow-xl shadow-[#5B4FBE]/25 mb-5">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A2E] mb-3 tracking-tight">
            Share Your{' '}
            <span className="bg-gradient-to-r from-[#5B4FBE] to-[#7C3AED] bg-clip-text text-transparent">Feedback</span>
          </h1>
          <p className="text-[#4A4A6A] text-base leading-relaxed max-w-md mx-auto">
            Help us make Couponscrew better. Every piece of feedback is read by our team and shapes how we improve.
          </p>
        </div>

        {/* ── Form Card ────────────────────────────────────────────────── */}
        <div className="relative">
          {/* Very subtle card shadow */}
          <div className="absolute inset-0 rounded-3xl bg-[#5B4FBE]/8 blur-2xl -z-10 translate-y-2" />

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-3xl p-7 sm:p-10 space-y-7 shadow-xl shadow-gray-200/80"
          >

            {/* 1 ── Topic Dropdown */}
            <div className="space-y-2">
              <label htmlFor="feedback-topic" className="flex items-center gap-2 text-sm font-semibold text-[#1A1A2E]">
                <MessageSquare className="w-4 h-4 text-[#5B4FBE]" />
                What would you like to tell us?
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="feedback-topic"
                  required
                  value={form.topic}
                  onChange={(e) => set('topic', e.target.value)}
                  className="w-full appearance-none bg-[#F8F8FF] border border-gray-200 hover:border-[#5B4FBE]/50 focus:border-[#5B4FBE] focus:ring-2 focus:ring-[#5B4FBE]/15 rounded-xl px-4 py-3.5 text-sm text-[#1A1A2E] transition-all outline-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400">Select a topic…</option>
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* 2 ── Star Rating */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#1A1A2E]">
                <Star className="w-4 h-4 text-[#5B4FBE]" />
                How would you rate your experience?
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => set('rating', star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                    className="p-1 transition-transform duration-150 hover:scale-125 active:scale-110 cursor-pointer"
                  >
                    <Star
                      className={`w-9 h-9 transition-colors duration-150 ${star <= active
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-transparent text-gray-300 hover:text-amber-300'
                        }`}
                    />
                  </button>
                ))}
                {active > 0 && (
                  <span className="ml-3 text-sm font-semibold text-amber-500 animate-in fade-in slide-in-from-left-2 duration-200">
                    {starLabels[active]}
                  </span>
                )}
              </div>
            </div>

            {/* 3 ── Page URL (optional) */}
            <div className="space-y-2">
              <label htmlFor="feedback-pageurl" className="flex items-center gap-2 text-sm font-semibold text-[#1A1A2E]">
                <Globe className="w-4 h-4 text-[#5B4FBE]" />
                Which page were you using?
                <span className="text-gray-400 text-xs font-normal ml-1">(optional)</span>
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  id="feedback-pageurl"
                  type="url"
                  value={form.pageUrl}
                  onChange={(e) => set('pageUrl', e.target.value)}
                  placeholder="https://couponscrew.com/stores/…"
                  className="w-full bg-[#F8F8FF] border border-gray-200 hover:border-[#5B4FBE]/50 focus:border-[#5B4FBE] focus:ring-2 focus:ring-[#5B4FBE]/15 rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#1A1A2E] placeholder:text-gray-400 transition-all outline-none"
                />
              </div>
            </div>

            {/* 4 ── Message */}
            <div className="space-y-2">
              <label htmlFor="feedback-message" className="flex items-center gap-2 text-sm font-semibold text-[#1A1A2E]">
                <FileText className="w-4 h-4 text-[#5B4FBE]" />
                Tell us more
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="feedback-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                placeholder="Share your thoughts, ideas, or any issues you've encountered…"
                className="w-full bg-[#F8F8FF] border border-gray-200 hover:border-[#5B4FBE]/50 focus:border-[#5B4FBE] focus:ring-2 focus:ring-[#5B4FBE]/15 rounded-xl px-4 py-3.5 text-sm text-[#1A1A2E] placeholder:text-gray-400 transition-all outline-none resize-none"
              />
            </div>

            {/* ── Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">About You</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* 5 & 6 ── Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="feedback-name" className="flex items-center gap-2 text-sm font-semibold text-[#1A1A2E]">
                  <User className="w-4 h-4 text-[#5B4FBE]" />
                  Your Name
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    id="feedback-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-[#F8F8FF] border border-gray-200 hover:border-[#5B4FBE]/50 focus:border-[#5B4FBE] focus:ring-2 focus:ring-[#5B4FBE]/15 rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#1A1A2E] placeholder:text-gray-400 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="feedback-email" className="flex items-center gap-2 text-sm font-semibold text-[#1A1A2E]">
                  <Mail className="w-4 h-4 text-[#5B4FBE]" />
                  Email Address
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input
                    id="feedback-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-[#F8F8FF] border border-gray-200 hover:border-[#5B4FBE]/50 focus:border-[#5B4FBE] focus:ring-2 focus:ring-[#5B4FBE]/15 rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#1A1A2E] placeholder:text-gray-400 transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 7 ── Can we contact you? */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-[#1A1A2E]">
                <Phone className="w-4 h-4 text-[#5B4FBE]" />
                Can we contact you if needed?
                <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                {[
                  { label: '👍 Yes, please!', value: true },
                  { label: '🙅 No, thanks', value: false },
                ].map(({ label, value }) => (
                  <button
                    key={String(value)}
                    type="button"
                    onClick={() => set('canContact', value)}
                    className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 cursor-pointer ${form.canContact === value
                      ? 'bg-[#5B4FBE] border-[#5B4FBE] text-white shadow-lg shadow-[#5B4FBE]/20'
                      : 'bg-white border-gray-200 text-[#4A4A6A] hover:border-[#5B4FBE]/50 hover:text-[#5B4FBE]'
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Error banner */}
            {error && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3.5 text-sm text-red-600 animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                {error}
              </div>
            )}

            {/* 8 ── Submit */}
            <button
              id="feedback-submit"
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#5B4FBE] to-[#7C3AED] hover:from-[#4D43A8] hover:to-[#6B2FD0] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#5B4FBE]/30 cursor-pointer"
            >
              {submitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Feedback ❤️
                </>
              )}
            </button>

          </form>
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Your data is kept private and never sold.{' '}
          <Link href="/privacy-policy" className="text-[#5B4FBE] hover:underline">Privacy Policy</Link>
        </p>

      </div>
    </main>
  );
}
