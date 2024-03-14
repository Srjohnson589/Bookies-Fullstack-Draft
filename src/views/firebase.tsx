
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "bookies-6a4b6.firebaseapp.com",
  projectId: "bookies-6a4b6",
  storageBucket: "bookies-6a4b6.appspot.com",
  messagingSenderId: "1019076458917",
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);