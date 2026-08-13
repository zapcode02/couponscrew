'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Ticket, Facebook, Instagram, Twitter, Youtube, Mail, Phone, Globe } from 'lucide-react';
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
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">
          {/* COL 1: Brand & Logo */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#5B4FBE] p-2 rounded-lg text-white">
                <Ticket className="w-5 h-5 rotate-[-15deg]" />
              </div>
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
              <li><Link href="/about" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">Terms & Conditions</Link></li>
              <li><Link href="/faqs" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8">FAQ</Link></li>
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
              <li><Link href="/stores/categories" className="text-gray-400 hover:text-white hover:pl-1 transition-all leading-8 cursor-pointer">Stores Categories</Link></li>
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
