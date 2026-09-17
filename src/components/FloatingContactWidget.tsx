'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '917838554882';
const WHATSAPP_MESSAGE = "Hi CouponsCrew team, I represent a brand and I'm interested in listing our coupons/offers on your website. Can we discuss?";
const PHONE_NUMBER = '+917838554882';

export default function FloatingContactWidget() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-3">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#5B4FBE] hover:bg-[#4A3FA8] text-white shadow-lg flex items-center justify-center transition-all active:scale-90"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call CouponsCrew"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#1A1A2E] border-2 border-[#5B4FBE] shadow-lg flex items-center justify-center transition-all hover:shadow-xl active:scale-90"
      >
        <Phone size={24} className="fill-current" />
      </a>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CouponsCrew on WhatsApp"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg flex items-center justify-center transition-all active:scale-90"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.001 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.763.462 3.486 1.34 5.003L2 22l5.114-1.341a9.958 9.958 0 0 0 4.887 1.245h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.929-7.07a9.935 9.935 0 0 0-7.072-2.834zm5.879 15.87a8.293 8.293 0 0 1-5.883 2.437h-.003a8.284 8.284 0 0 1-4.223-1.156l-.303-.18-3.135.822.837-3.055-.198-.313a8.28 8.28 0 0 1-1.269-4.428c0-4.583 3.73-8.312 8.316-8.312a8.256 8.256 0 0 1 5.879 2.437 8.256 8.256 0 0 1 2.435 5.881 8.294 8.294 0 0 1-2.453 5.867z" />
        </svg>
      </a>
    </div>
  );
}
