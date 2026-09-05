'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { getConsent, canLoadAnalytics, CONSENT_CHANGE_EVENT, ConsentStatus } from '../lib/cookieConsent';

export default function AnalyticsLoader() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(canLoadAnalytics(getConsent()));

    const handleChange = (e: Event) => {
      const status = (e as CustomEvent<ConsentStatus>).detail;
      setAllowed(canLoadAnalytics(status));
    };

    window.addEventListener(CONSENT_CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleChange);
  }, []);

  if (!allowed) return null;

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KY4367XTLE" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KY4367XTLE');
      `}</Script>
    </>
  );
}
