// Firebase Console > Project settings > Your apps > Web app theke ei value gulo boshao
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "000000000000",
  appId: "YOUR_APP_ID"
};
export const VAPID_KEY = "YOUR_WEB_PUSH_KEY"; // Cloud Messaging > Web Push certificates
export const demo = firebaseConfig.apiKey === "YOUR_API_KEY";
