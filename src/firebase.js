import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzVI0lqfl4CyErZOHcke3ZJEqHyGM6DcQ",
  authDomain: "luna-ai-b7862.firebaseapp.com",
  projectId: "luna-ai-b7862",
  storageBucket: "luna-ai-b7862.firebasestorage.app",
  messagingSenderId: "653322252888",
  appId: "1:653322252888:web:819d326a0ba31957f4d02d",
  measurementId: "G-VXC620RK6G"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

let analyticsPromise = null;

// Dynamically import and initialize Firebase Analytics when needed
const getAnalyticsLazy = () => {
  if (typeof window === 'undefined') return Promise.resolve(null);
  
  if (!analyticsPromise) {
    analyticsPromise = import("firebase/analytics")
      .then(({ getAnalytics }) => {
        return getAnalytics(app);
      })
      .catch((err) => {
        console.warn("Failed to load Firebase Analytics:", err);
        return null;
      });
  }
  return analyticsPromise;
};

// Pre-initialize analytics when the browser is idle to avoid impact on page load
if (typeof window !== 'undefined') {
  const initOnIdle = () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => getAnalyticsLazy());
    } else {
      setTimeout(() => getAnalyticsLazy(), 3000);
    }
  };
  
  if (document.readyState === 'complete') {
    initOnIdle();
  } else {
    window.addEventListener('load', initOnIdle);
  }
}

/**
 * Utility to log custom events
 * @param {string} eventName 
 * @param {object} params 
 */
export const trackEvent = (eventName, params = {}) => {
  getAnalyticsLazy().then((analytics) => {
    if (analytics) {
      import("firebase/analytics").then(({ logEvent }) => {
        logEvent(analytics, eventName, params);
      });
    }
  });
  console.log(`[Analytics Logged]: ${eventName}`, params);
};

export default app;

