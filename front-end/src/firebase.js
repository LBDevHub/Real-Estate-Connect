import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-connect-43.firebaseapp.com",
  projectId: "real-estate-connect-43",
  storageBucket: "real-estate-connect-43.appspot.com",
  messagingSenderId: "258724642775",
  appId: "1:258724642775:web:3982fda3eb63c4a630d592"
};

 export const app = initializeApp(firebaseConfig);