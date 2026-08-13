'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
import { getConsent, setConsent, ConsentStatus } from '../lib/cookieConsent';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (status: Exclude<ConsentStatus, null>) => {
    setConsent(status);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto z-50 w-auto sm:max-w-md">
      <div className="bg-white border border-[#E8E8F0] rounded-2xl shadow-xl p-5 space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-[#F0EEFF] p-2 rounded-xl text-[#5B4FBE] shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-[#4A4A6A] leading-relaxed">
            We use cookies to keep the site running smoothly and to understand how visitors use Couponscrew. Choose what you're comfortable with — see our{' '}
            <Link href="/privacy-policy" className="text-[#5B4FBE] font-semibold hover:underline">
              Privacy Policy
            </Link>{' '}
            for details.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <button
            onClick={() => handleChoice('accepted')}
            className="flex-1 sm:flex-none whitespace-nowrap bg-gradient-to-r from-[#5B4FBE] to-[#7C3AED] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl hover:opacity-90 transition cursor-pointer"
          >
            Accept All
          </button>
          <button
            onClick={() => handleChoice('limited')}
            className="flex-1 sm:flex-none whitespace-nowrap border border-[#5B4FBE] text-[#5B4FBE] text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl hover:bg-[#F0EEFF] transition cursor-pointer"
          >
            Accept Limited
          </button>
          <button
            onClick={() => handleChoice('rejected')}
            className="flex-1 sm:flex-none whitespace-nowrap text-[#4A4A6A] text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl hover:bg-gray-100 transition cursor-pointer"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
