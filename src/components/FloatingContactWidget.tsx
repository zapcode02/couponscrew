'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

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
    <div className="fixed bottom-[80px] right-4 sm:bottom-[92px] sm:right-6 z-50">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#5B4FBE] hover:bg-[#4A3FA8] text-white shadow-lg flex items-center justify-center transition-all active:scale-90"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
