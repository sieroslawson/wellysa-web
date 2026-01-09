/**
 * Application Configuration
 * Centralized config for easy updates
 */

export const config = {
  app: {
    name: 'Wellysa',
    description: 'Twój osobisty asystent zdrowia',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://wellysa.com',
  },
  intercom: {
    appId: process.env.NEXT_PUBLIC_INTERCOM_APP_ID || '',
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  },
  appStore: {
    ios: process.env.NEXT_PUBLIC_APP_STORE_IOS || 'https://wellysa.com/pobierz',
    android: process.env.NEXT_PUBLIC_APP_STORE_ANDROID || 'https://wellysa.com/pobierz',
  },
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/wellysa',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/wellysa',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/wellysa',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com/@wellysa',
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || 'https://tiktok.com/@wellysa',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/wellysa',
  },
  formService: {
    url: process.env.NEXT_PUBLIC_FORM_SERVICE_URL || '',
  },
};
