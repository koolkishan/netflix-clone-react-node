import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC5g42lwWGlYbSNUtDsz40qE4ITizQqrz4",
  authDomain: "netflix-clone2-d96e4.firebaseapp.com",
  projectId: "netflix-clone2-d96e4",
  storageBucket: "netflix-clone2-d96e4.appspot.com",
  messagingSenderId: "284515326482",
  appId: "1:284515326482:web:24a841f3c75c60179b96cb",
  measurementId: "G-XPH6WF2S2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
