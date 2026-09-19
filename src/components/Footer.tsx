'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Ticket, Facebook, Instagram, Twitter, Youtube, Mail, Phone, Globe, Send } from 'lucide-react';
import { getConsent, canLoadTranslate, CONSENT_CHANGE_EVENT, ConsentStatus } from '../lib/cookieConsent';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay?: boolean },
          elementId: string
        ) => void;
      };
    };
  }
}

const TRANSLATE_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
  { code: 'it', label: 'Italian' },
  { code: 'pt', label: 'Portuguese' },
  { code: 'nl', label: 'Dutch' },
  { code: 'pl', label: 'Polish' },
  { code: 'ro', label: 'Romanian' },
  { code: 'el', label: 'Greek' },
  { code: 'sv', label: 'Swedish' },
  { code: 'da', label: 'Danish' },
  { code: 'fi', label: 'Finnish' },
  { code: 'no', label: 'Norwegian' },
  { code: 'cs', label: 'Czech' },
  { code: 'hu', label: 'Hungarian' },
  { code: 'uk', label: 'Ukrainian' },
  { code: 'ru', label: 'Russian' },
  { code: 'tr', label: 'Turkish' },
  { code: 'ar', label: 'Arabic' },
  { code: 'he', label: 'Hebrew' },
  { code: 'fa', label: 'Persian' },
  { code: 'ur', label: 'Urdu' },
  { code: 'hi', label: 'Hindi' },
  { code: 'bn', label: 'Bengali' },
  { code: 'ta', label: 'Tamil' },
  { code: 'te', label: 'Telugu' },
  { code: 'mr', label: 'Marathi' },
  { code: 'gu', label: 'Gujarati' },
  { code: 'kn', label: 'Kannada' },
  { code: 'ml', label: 'Malayalam' },
  { code: 'pa', label: 'Punjabi' },
  { code: 'zh-CN', label: 'Chinese (Simplified)' },
  { code: 'zh-TW', label: 'Chinese (Traditional)' },
  { code: 'ja', label: 'Japanese' },
  { code: 'ko', label: 'Korean' },
  { code: 'th', label: 'Thai' },
  { code: 'vi', label: 'Vietnamese' },
  { code: 'id', label: 'Indonesian' },
  { code: 'ms', label: 'Malay' },
  { code: 'tl', label: 'Filipino' },
  { code: 'sw', label: 'Swahili' },
];

function handleLanguageChange(langCode: string) {
  const combo = document.querySelector<HTMLSelectElement>('select.goog-te-combo');
  if (!combo) return;
  combo.value = langCode;
  combo.dispatchEvent(new Event('change'));
}

export default function Footer() {
  const [translateAllowed, setTranslateAllowed] = useState(false);
  const [newsEmail, setNewsEmail] = useState<string>('');
  const [newsSubscribed, setNewsSubscribed] = useState<boolean>(false);
  const [newsSubmitting, setNewsSubmitting] = useState<boolean>(false);
  const [newsError, setNewsError] = useState<string>('');

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim() || newsSubmitting) return;

    setNewsSubmitting(true);
    setNewsError('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsEmail.trim() }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Subscription failed');
      }

      setNewsSubscribed(true);
      setNewsEmail('');
      setTimeout(() => setNewsSubscribed(false), 4500);
    } catch {
      setNewsError('Something went wrong. Please try again.');
      setTimeout(() => setNewsError(''), 4500);
    } finally {
      setNewsSubmitting(false);
    }
  };

  useEffect(() => {
    setTranslateAllowed(canLoadTranslate(getConsent()));

    const handleChange = (e: Event) => {
      const status = (e as CustomEvent<ConsentStatus>).detail;
      setTranslateAllowed(canLoadTranslate(status));
    };

    window.addEventListener(CONSENT_CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleChange);
  }, []);

  return (
    <footer className="bg-[#1A1A2E] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Subscribe Bar */}
        <div className="bg-gradient-to-r from-[#5B4FBE] to-[#7C3AED] rounded-3xl px-6 py-6 sm:px-10 mb-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Send className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl">Subscribe for Newsletter</h3>
              <p className="text-white/70 text-xs sm:text-sm mt-1">
                Get the latest coupons, exclusive deals &amp; offers directly in your inbox.
              </p>
            </div>
          </div>

          {newsSubscribed ? (
            <div className="w-full lg:w-auto bg-white/15 border border-white/30 rounded-xl px-6 py-3.5 text-center">
              <span className="text-sm font-bold text-white">✓ Subscribed Successfully!</span>
            </div>
          ) : (
            <div className="w-full lg:w-auto">
              <form onSubmit={handleNewsSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full sm:w-72 bg-white/10 border border-white/20 placeholder:text-white/50 focus:border-white/60 focus:bg-white/15 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm focus:outline-hidden transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={newsSubmitting}
                  className="bg-white hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed text-[#5B4FBE] font-bold text-sm px-7 py-3.5 rounded-xl transition-all active:scale-[0.98] cursor-pointer shrink-0"
                >
                  {newsSubmitting ? 'Subscribing…' : 'Subscribe'}
                </button>
              </form>
              {newsError && (
                <p className="text-xs text-red-200 mt-2">{newsError}</p>
              )}
            </div>
          )}
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">
          {/* COL 1: Brand & Logo */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2.5">
             
              <span className="text-xl font-bold tracking-tight text-white" translate="no">
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
              <a href="https://www.instagram.com/couponscrew" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-[#FF5722] hover:border-[#FF5722] hover:bg-white transition-all duration-200" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://x.com/couponscrew?s=11" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-sky-400 hover:border-sky-400 hover:bg-white transition-all duration-200" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@couponscrew" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-red-500 hover:border-red-500 hover:bg-white transition-all duration-200" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-[#25D366] hover:border-[#25D366] hover:bg-white transition-all duration-200" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.001 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.763.462 3.486 1.34 5.003L2 22l5.114-1.341a9.958 9.958 0 0 0 4.887 1.245h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.929-7.07a9.935 9.935 0 0 0-7.072-2.834zm5.879 15.87a8.293 8.293 0 0 1-5.883 2.437h-.003a8.284 8.284 0 0 1-4.223-1.156l-.303-.18-3.135.822.837-3.055-.198-.313a8.28 8.28 0 0 1-1.269-4.428c0-4.583 3.73-8.312 8.316-8.312a8.256 8.256 0 0 1 5.879 2.437 8.256 8.256 0 0 1 2.435 5.881 8.294 8.294 0 0 1-2.453 5.867z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-[#26A5E4] hover:border-[#26A5E4] hover:bg-white transition-all duration-200" aria-label="Telegram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M21.94 4.36c.26-1.13-.42-1.62-1.16-1.35L2.6 10.2c-1.1.43-1.09 1.05-.19 1.32l4.53 1.41 10.5-6.62c.5-.32.95-.14.58.2L9.3 14.5l-.34 4.97c.5 0 .72-.23.98-.5l2.35-2.28 4.87 3.6c.9.5 1.54.24 1.77-.83l3.02-14.9z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-[#E60023] hover:border-[#E60023] hover:bg-white transition-all duration-200" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M12.017 2C6.484 2 2 6.484 2 12.017c0 4.247 2.64 7.87 6.367 9.33-.088-.792-.167-2.008.035-2.874.183-.783 1.176-4.985 1.176-4.985s-.3-.6-.3-1.487c0-1.393.807-2.434 1.813-2.434.855 0 1.268.642 1.268 1.412 0 .86-.548 2.146-.83 3.338-.236 1 .5 1.815 1.485 1.815 1.782 0 3.152-1.879 3.152-4.588 0-2.4-1.725-4.077-4.188-4.077-2.852 0-4.526 2.14-4.526 4.35 0 .862.332 1.786.746 2.288a.3.3 0 0 1 .069.288c-.076.316-.245.99-.278 1.128-.043.183-.143.222-.33.134-1.23-.573-2-2.372-2-3.816 0-3.107 2.257-5.96 6.51-5.96 3.417 0 6.075 2.436 6.075 5.69 0 3.393-2.14 6.124-5.113 6.124-.998 0-1.937-.519-2.257-1.132l-.614 2.34c-.222.855-.822 1.926-1.224 2.58.922.285 1.9.438 2.914.438 5.532 0 10.017-4.484 10.017-10.017C22.034 6.484 17.549 2 12.017 2z" />
                </svg>
              </a>
            </div>

            {/* Contact info */}
            <div className="border-t border-gray-800 pt-4 mt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>Couponscrew@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>+91 7838554882</span>
              </div>
            </div>
          </div>

          {/* COL 2: Useful Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-[#5B4FBE]">
              Useful Links
            </h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about-us" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">About Us</Link></li>
              <li><Link href="/branding" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Branding</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Terms & Conditions</Link></li>
              <li><Link href="/faqs" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">FAQ</Link></li>
              <li><Link href="/sitemap" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Sitemap</Link></li>
              <li className="pt-2">
                <Link
                  href="/feedback"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#5B4FBE]/60 text-[#9B8FE8] hover:bg-[#5B4FBE] hover:text-white hover:border-[#5B4FBE] text-xs font-semibold transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]"
                >
                  Feedback
                </Link>
              </li>
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
              <li><Link href="/festival-offers" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8 cursor-pointer">Festival Offers</Link></li>
              <li><Link href="/stores/categories" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8 cursor-pointer">Stores Categories</Link></li>
              <li><Link href="/products/categories" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8 cursor-pointer">Product Categories</Link></li>
              <li><Link href="/deals-of-the-day" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8 cursor-pointer">Deals of the Day</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Blog</Link></li>
            </ul>
          </div>

          {/* COL 4: Top Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-[2px] after:bg-emerald-500">
              Top Categories
            </h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/stores/categories/fashion" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Fashion</Link></li>
              <li><Link href="/stores/categories/beauty" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Beauty</Link></li>
              <li><Link href="/stores/categories/exercise-and-fitness" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Exercise &amp; Fitness</Link></li>
              <li><Link href="/stores/categories/home-and-kitchen" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Home &amp; Kitchen</Link></li>
              <li><Link href="/stores/categories/clothing-and-accessories" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Clothing &amp; Accessories</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-xs sm:text-sm text-gray-500">
          <div>
            © 2026 Couponscrew. All Rights Reserved.
          </div>

          {/* Language switcher — drives the hidden Google Translate widget */}
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <select
              defaultValue="en"
              onChange={(e) => handleLanguageChange(e.target.value)}
              aria-label="Select language"
              className="bg-transparent border border-gray-700 rounded-lg px-2.5 py-1.5 text-xs text-gray-400 hover:text-white hover:border-gray-600 focus:outline-none focus:border-[#5B4FBE] transition-colors cursor-pointer"
            >
              {TRANSLATE_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-[#1A1A2E] text-white">
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Hidden mount point + scripts for Google Translate Element — gated behind cookie consent */}
      <div id="google_translate_element" className="hidden" />
      {translateAllowed && (
        <>
          <Script
            id="google-translate-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement(
                    { pageLanguage: 'en', autoDisplay: true },
                    'google_translate_element'
                  );
                }
              `,
            }}
          />
          <Script
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
          />
        </>
      )}
      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        #google_translate_element .goog-te-gadget {
          display: none !important;
        }
      `}</style>
    </footer>
  );
}
