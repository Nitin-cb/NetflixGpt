// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBoH0EBW7_rXrbkXK3ppTcAxkKQMtjOPBE',
  authDomain: 'netflixgpt-b0fde.firebaseapp.com',
  projectId: 'netflixgpt-b0fde',
  storageBucket: 'netflixgpt-b0fde.appspot.com',
  messagingSenderId: '347743626035',
  appId: '1:347743626035:web:0ece0b26512cf72714d446',
  measurementId: 'G-GR396VRT4P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
