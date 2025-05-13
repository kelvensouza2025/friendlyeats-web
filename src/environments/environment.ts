// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyAlc3ebgKmN9M0eQruyGn9rglzZ9J4XrYA',
  authDomain: 'friendlychat-kelven.firebaseapp.com',
  projectId: 'friendlychat-kelven',
  storageBucket: 'friendlychat-kelven.firebasestorage.app',
  messagingSenderId: '462191980426',
  appId: '1:462191980426:web:5df1c3d777438fa64aa273',
  measurementId: 'G-Z923SJY06H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
