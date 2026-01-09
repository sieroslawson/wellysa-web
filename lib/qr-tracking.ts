/**
 * QR Code Tracking Utility
 * Wszystkie kody QR kierują na wellysa.com z wbudowanymi diplinkami do śledzenia
 */

export interface QRTrackingParams {
  source: string; // 'ambassador', 'partner', etc.
  campaign?: string;
  medium?: string;
}

export function generateQRLink(basePath: string, params: QRTrackingParams): string {
  const url = new URL(basePath, 'https://wellysa.com');
  
  // Add tracking parameters
  url.searchParams.set('utm_source', params.source);
  if (params.campaign) {
    url.searchParams.set('utm_campaign', params.campaign);
  }
  if (params.medium) {
    url.searchParams.set('utm_medium', params.medium || 'qr');
  }
  
  // Add timestamp for tracking
  url.searchParams.set('_t', Date.now().toString());
  
  return url.toString();
}

export function trackQRVisit() {
  if (typeof window === 'undefined') return;
  
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source');
  
  if (source) {
    // Send tracking event to analytics
    if (window.gtag) {
      window.gtag('event', 'qr_scan', {
        source: source,
        campaign: params.get('utm_campaign'),
        medium: params.get('utm_medium'),
      });
    }
    
    // Store in localStorage for session tracking
    localStorage.setItem('wellysa_qr_source', source);
  }
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
