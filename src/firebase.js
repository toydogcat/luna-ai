import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBzVI0lqfl4CyErZOHcke3ZJEqHyGM6DcQ",
  authDomain: "luna-ai-b7862.firebaseapp.com",
  projectId: "luna-ai-b7862",
  storageBucket: "luna-ai-b7862.firebasestorage.app",
  messagingSenderId: "653322252888",
  appId: "1:653322252888:web:819d326a0ba31957f4d02d",
  measurementId: "G-VXC620RK6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/**
 * Utility to log custom events
 * @param {string} eventName 
 * @param {object} params 
 */
export const trackEvent = (eventName, params = {}) => {
  logEvent(analytics, eventName, params);
  console.log(`[Analytics Logged]: ${eventName}`, params);
};

export default analytics;
