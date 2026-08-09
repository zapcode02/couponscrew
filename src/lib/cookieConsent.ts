export type ConsentStatus = 'accepted' | 'limited' | 'rejected' | null;

const STORAGE_KEY = 'cc_cookie_consent';
export const CONSENT_CHANGE_EVENT = 'cookieConsentChange';

export function getConsent(): ConsentStatus {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === 'accepted' || value === 'limited' || value === 'rejected') return value;
  return null;
}

export function setConsent(status: Exclude<ConsentStatus, null>): void {
  window.localStorage.setItem(STORAGE_KEY, status);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: status }));
}

export function canLoadAnalytics(status: ConsentStatus): boolean {
  return status === 'accepted';
}

export function canLoadTranslate(status: ConsentStatus): boolean {
  return status === 'accepted' || status === 'limited';
}
